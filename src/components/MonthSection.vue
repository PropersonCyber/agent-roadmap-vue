<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Month } from '@/types/roadmap'
import { useTasks } from '@/composables/useTasks'
import WeekCard from './WeekCard.vue'

const props = defineProps<{
  month: Month
  colorClass: string
  displayIndex: number
}>()

const { getMonthProgress } = useTasks()

const open = ref(localStorage.getItem(`roadmap-open-${props.month.id}`) === 'true')

const progress = computed(() => getMonthProgress(props.month.id))
const allDone = computed(() => progress.value.done === progress.value.total && progress.value.total > 0)

function toggle() {
  open.value = !open.value
  localStorage.setItem(`roadmap-open-${props.month.id}`, open.value ? 'true' : 'false')
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="month-section" :class="{ open }" :id="month.id">
    <div class="month-header-bar" @click="toggle">
      <div class="month-dot" :class="colorClass"></div>
      <span class="month-num" :class="colorClass">{{ month.num }}</span>
      <span class="month-title-text">{{ month.title }}</span>
      <div class="month-meta">
        <div class="month-progress-mini">
          <div class="month-progress-mini-fill" :style="{ width: progress.pct + '%' }"></div>
        </div>
        <span class="month-task-count">{{ progress.done }}/{{ progress.total }}</span>
        <span class="month-chevron">▾</span>
      </div>
    </div>
    <div class="month-body">
      <p class="month-goal-text">
        🎯 本月目标：{{ month.goal }} ｜ ⏱ 预估学习时间：{{ month.hours }}
      </p>
      <WeekCard
        v-for="w in month.weeks"
        :key="w.id"
        :week="w"
      />
      <div class="month-checkpoint" :class="{ unlocked: progress.done > 0, completed: allDone }">
        <h5>🔖 月度检查点</h5>
        <p>完成本月所有任务后解锁</p>
        <div class="cp-status">
          <span v-if="allDone" class="cp-done">✅ 已完成！本月技能已掌握</span>
          <span v-else-if="progress.done > 0" class="cp-ready">进行中... 还剩 {{ progress.total - progress.done }} 个任务</span>
          <span v-else class="cp-locked">🔒 尚未开始</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.month-section{border-radius:var(--radius-xl);border:1px solid var(--border);background:var(--bg-card);margin-bottom:24px;overflow:hidden;transition:var(--transition);scroll-margin-top:calc(var(--nav-h) + 24px)}
.month-section:hover{border-color:var(--border-strong)}
.month-header-bar{display:flex;align-items:center;gap:16px;padding:24px 28px;cursor:pointer;transition:var(--transition);flex-wrap:wrap}
.month-header-bar:hover{background:var(--bg-hover)}
.month-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;box-shadow:0 0 12px currentColor}
.month-dot.m1{background:var(--accent);color:var(--accent)}
.month-dot.m2{background:var(--blue);color:var(--blue)}
.month-dot.m3{background:var(--purple);color:var(--purple)}
.month-dot.m4{background:var(--orange);color:var(--orange)}
.month-dot.m5{background:#ec4899;color:#ec4899}
.month-dot.m6{background:var(--red);color:var(--red)}
.month-num{font-size:13px;font-weight:700;font-family:var(--mono);padding:4px 12px;border-radius:6px}
.month-num.m1{background:var(--accent-dim);color:var(--accent)}
.month-num.m2{background:var(--blue-dim);color:var(--blue)}
.month-num.m3{background:var(--purple-dim);color:var(--purple)}
.month-num.m4{background:var(--orange-dim);color:var(--orange)}
.month-num.m5{background:rgba(236,72,153,.12);color:#ec4899}
.month-num.m6{background:rgba(239,68,68,.12);color:var(--red)}
.month-title-text{font-size:20px;font-weight:700;letter-spacing:-.02em;flex:1}
.month-meta{display:flex;align-items:center;gap:12px}
.month-progress-mini{width:120px;height:6px;border-radius:3px;background:var(--border);overflow:hidden}
.month-progress-mini-fill{height:100%;border-radius:3px;background:var(--accent);transition:width .4s cubic-bezier(.4,0,.2,1)}
.month-task-count{font-size:13px;color:var(--text-muted);white-space:nowrap}
.month-chevron{font-size:18px;color:var(--text-muted);transition:transform .3s}
.month-section.open .month-chevron{transform:rotate(180deg)}
.month-body{display:none;padding:0 28px 24px}
.month-section.open .month-body{display:block}
.month-goal-text{font-size:14px;color:var(--text-secondary);margin-bottom:20px}
.month-checkpoint{padding:20px 24px;border-radius:var(--radius);border:2px dashed var(--border);text-align:center;margin-top:24px;transition:var(--transition)}
.month-checkpoint.unlocked{background:var(--accent-dim);border-color:var(--accent)}
.month-checkpoint.completed{background:var(--accent-dim);border-color:var(--accent);border-style:solid}
.month-checkpoint h5{font-size:14px;font-weight:600;margin-bottom:4px}
.month-checkpoint p{font-size:13px;color:var(--text-secondary)}
.cp-status{font-size:12px;margin-top:8px}
.cp-locked{color:var(--text-muted)}
.cp-ready{color:var(--accent);font-weight:600}
.cp-done{color:var(--accent);font-weight:700}

@media(max-width:600px){
  .month-header-bar{flex-direction:column;align-items:flex-start}
  .month-meta{width:100%;justify-content:space-between}
}
</style>
