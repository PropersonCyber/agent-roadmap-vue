<script setup lang="ts">
import { useTasks } from '@/composables/useTasks'
import { useToast } from '@/composables/useToast'
import { useConfetti } from '@/composables/useConfetti'
import { roadmapData } from '@/data/roadmapData'
import type { Month, Week } from '@/types/roadmap'
import MonthSection from './MonthSection.vue'
import { watch } from 'vue'

const { currentFilter, filterCounts, resetAll, tasks } = useTasks()
const { showToast } = useToast()
const { spawnConfetti } = useConfetti()

const colorClasses = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']

function setFilter(filter: typeof currentFilter.value) {
  currentFilter.value = filter
}

function isMonthVisible(m: Month) {
  if (currentFilter.value === 'all') return true
  let total = 0, done = 0
  for (const w of m.weeks) {
    for (const t of w.tasks) {
      total++
      if (tasks.value[t.id]) done++
    }
  }
  if (currentFilter.value === 'complete') return done > 0
  if (currentFilter.value === 'incomplete') return done < total
  return true
}

function isWeekVisible(w: Week) {
  if (currentFilter.value === 'all') return true
  const d = w.tasks.filter(t => tasks.value[t.id]).length
  if (currentFilter.value === 'complete') return d === w.tasks.length
  if (currentFilter.value === 'incomplete') return d < w.tasks.length
  return true
}

function expandAll() {
  document.querySelectorAll('.month-section').forEach(el => {
    el.classList.add('open')
    const id = el.getAttribute('id')
    if (id) localStorage.setItem(`roadmap-open-${id}`, 'true')
  })
  document.querySelectorAll('.week-card').forEach(el => {
    el.classList.add('open')
    const wid = el.getAttribute('data-week')
    if (wid) localStorage.setItem(`roadmap-open-week-${wid}`, 'true')
  })
}

function collapseAll() {
  document.querySelectorAll('.month-section').forEach(el => {
    el.classList.remove('open')
    const id = el.getAttribute('id')
    if (id) localStorage.setItem(`roadmap-open-${id}`, 'false')
  })
  document.querySelectorAll('.week-card').forEach(el => {
    el.classList.remove('open')
    const wid = el.getAttribute('data-week')
    if (wid) localStorage.setItem(`roadmap-open-week-${wid}`, 'false')
  })
}

function handleReset() {
  if (confirm('确定要重置所有进度吗？此操作不可恢复！')) {
    resetAll()
    showToast('已重置所有进度')
  }
}

// Watch for completed months and celebrate
watch(tasks, () => {
  for (const m of roadmapData) {
    let total = 0, done = 0
    for (const w of m.weeks) {
      for (const t of w.tasks) {
        total++
        if (tasks.value[t.id]) done++
      }
    }
    if (total > 0 && done === total && !localStorage.getItem(`celebrated-${m.id}`)) {
      localStorage.setItem(`celebrated-${m.id}`, 'true')
      showToast(`🎉 恭喜完成 ${m.num} — ${m.title}！`, true)
      spawnConfetti()
    }
  }
}, { deep: true })
</script>

<template>
  <section id="roadmap">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 04</div>
        <h2 class="section-title">6 个月学习路线</h2>
        <p class="section-desc">每月聚焦一个核心主题，每周拆解为可执行的小任务。勾选任务追踪进度，所有数据自动保存到本地。</p>
      </div>
      <div class="filter-bar reveal">
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'all' }"
          @click="setFilter('all')"
        >全部<span class="count">{{ filterCounts.all }}</span></button>
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'incomplete' }"
          @click="setFilter('incomplete')"
        >未完成<span class="count">{{ filterCounts.incomplete }}</span></button>
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'complete' }"
          @click="setFilter('complete')"
        >已完成<span class="count">{{ filterCounts.complete }}</span></button>
        <div class="filter-actions">
          <button class="expand-btn" @click="expandAll">展开全部</button>
          <button class="expand-btn" @click="collapseAll">折叠全部</button>
          <button class="btn btn-danger" style="font-size:12px;padding:7px 14px;" @click="handleReset">重置进度</button>
        </div>
      </div>
      <div id="roadmapContainer">
        <MonthSection
          v-for="(m, i) in roadmapData"
          :key="m.id"
          :month="m"
          :color-class="colorClasses[i]"
          :display-index="i"
          :style="{ display: isMonthVisible(m) ? '' : 'none' }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.filter-bar{display:flex;align-items:center;gap:10px;margin-bottom:32px;flex-wrap:wrap}
.filter-btn{padding:7px 16px;border-radius:8px;font-size:13px;font-weight:500;border:1px solid var(--border);transition:var(--transition);color:var(--text-secondary)}
.filter-btn:hover,.filter-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.filter-btn .count{font-size:11px;opacity:.7;margin-left:4px}
.filter-actions{margin-left:auto;display:flex;gap:8px}
.expand-btn{padding:7px 14px;border-radius:8px;font-size:12px;border:1px solid var(--border);color:var(--text-secondary);transition:var(--transition)}
.expand-btn:hover{background:var(--bg-hover);border-color:var(--border-strong)}

@media(max-width:600px){
  .filter-bar{flex-direction:column;align-items:stretch}
  .filter-actions{margin-left:0;justify-content:center}
}
</style>
