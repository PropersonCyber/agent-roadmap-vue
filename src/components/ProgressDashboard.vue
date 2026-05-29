<script setup lang="ts">
import { computed } from 'vue'
import { useTasks } from '@/composables/useTasks'
import { roadmapData } from '@/data/roadmapData'

const emit = defineEmits<{
  scrollToMonth: [monthId: string]
}>()

const { overallProgress, getMonthProgress, streak } = useTasks()

const CIRCUMFERENCE = 326.7
const RING_CIRC = 194.8

const ringOffset = computed(() => {
  return CIRCUMFERENCE * (1 - overallProgress.value.pct / 100)
})

const ringClass = computed(() => {
  if (overallProgress.value.pct < 30) return 'low'
  if (overallProgress.value.pct < 60) return 'half'
  if (overallProgress.value.pct < 100) return 'almost'
  return ''
})

const currentMilestone = computed(() => {
  if (overallProgress.value.pct >= 100) return '全部完成！'
  for (const m of roadmapData) {
    if (getMonthProgress(m.id).pct < 100) return m.num
  }
  return '-'
})

const monthColors = ['var(--accent)', 'var(--blue)', 'var(--purple)', 'var(--orange)', '#ec4899', 'var(--red)']

function handleMonthClick(monthId: string) {
  emit('scrollToMonth', monthId)
}
</script>

<template>
  <section class="progress-section" id="progress">
    <div class="container">
      <div class="progress-dashboard reveal">
        <div class="progress-overview">
          <div class="progress-overall-ring">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" class="ring-bg"/>
              <circle
                cx="60" cy="60" r="52"
                class="ring-fg"
                :class="ringClass"
                :stroke-dasharray="CIRCUMFERENCE"
                :stroke-dashoffset="ringOffset"
              />
            </svg>
            <div class="progress-overall-text">
              <span class="overall-percent">{{ overallProgress.pct }}%</span>
              <span class="overall-label">总完成度</span>
            </div>
          </div>
          <div class="progress-stats">
            <div class="progress-stat">
              <span class="stat-num" style="color:var(--accent)">{{ overallProgress.done }}</span>
              <span class="stat-label">已完成任务</span>
            </div>
            <div class="progress-stat">
              <span class="stat-num" style="color:var(--blue)">{{ overallProgress.total }}</span>
              <span class="stat-label">总任务数</span>
            </div>
            <div class="progress-stat">
              <span class="stat-num" style="color:var(--purple)">{{ currentMilestone }}</span>
              <span class="stat-label">当前阶段</span>
            </div>
            <div class="progress-stat">
              <span class="stat-num" style="color:var(--orange)">{{ streak.count }}</span>
              <span class="stat-label">连续学习天数</span>
            </div>
          </div>
        </div>
        <div class="progress-rings">
          <div
            v-for="(m, i) in roadmapData"
            :key="m.id"
            class="progress-ring-card"
            :class="{ 'all-done': getMonthProgress(m.id).done === getMonthProgress(m.id).total && getMonthProgress(m.id).total > 0 }"
            @click="handleMonthClick(m.id)"
          >
            <svg viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="31" class="ring-bg-sm"/>
              <circle
                cx="36" cy="36" r="31"
                class="ring-fg-sm"
                :style="{
                  stroke: monthColors[i],
                  strokeDasharray: RING_CIRC,
                  strokeDashoffset: RING_CIRC * (1 - getMonthProgress(m.id).pct / 100)
                }"
              />
            </svg>
            <div class="progress-ring-label">{{ m.num }}</div>
            <div class="progress-ring-count">{{ getMonthProgress(m.id).done }}/{{ getMonthProgress(m.id).total }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.progress-section{padding:0 0 80px;position:relative;z-index:1;margin-top:-40px}
.progress-dashboard{padding:32px;border-radius:var(--radius-xl);border:1px solid var(--border);background:var(--bg-card);box-shadow:var(--shadow-md)}
.progress-overview{display:flex;align-items:center;gap:32px;margin-bottom:28px;flex-wrap:wrap}
.progress-overall-ring{position:relative;flex-shrink:0}
.progress-overall-ring svg{width:110px;height:110px;transform:rotate(-90deg)}
.ring-bg{fill:none;stroke:var(--border);stroke-width:8}
.ring-fg{fill:none;stroke:var(--accent);stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)}
.ring-fg.almost{stroke:var(--blue)}
.ring-fg.half{stroke:var(--orange)}
.ring-fg.low{stroke:var(--red)}
.progress-overall-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.overall-percent{font-size:26px;font-weight:800;letter-spacing:-.02em}
.overall-label{font-size:11px;color:var(--text-muted);margin-top:2px}
.progress-stats{display:flex;gap:32px;flex-wrap:wrap}
.progress-stat{text-align:center}
.progress-stat .stat-num{display:block;font-size:22px;font-weight:700}
.progress-stat .stat-label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em;margin-top:2px}
.progress-rings{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
.progress-ring-card{text-align:center;cursor:pointer;transition:var(--transition);padding:16px 8px;border-radius:var(--radius);border:1px solid transparent}
.progress-ring-card:hover{border-color:var(--border);background:var(--bg-hover)}
.progress-ring-card svg{width:72px;height:72px;transform:rotate(-90deg)}
.progress-ring-card .ring-fg-sm{fill:none;stroke-width:6;stroke-linecap:round;transition:stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)}
.progress-ring-card .ring-bg-sm{fill:none;stroke:var(--border);stroke-width:6}
.progress-ring-label{font-size:12px;font-weight:600;margin-top:8px}
.progress-ring-count{font-size:11px;color:var(--text-muted)}
.progress-ring-card.all-done .ring-fg-sm{stroke:var(--accent)}
.progress-ring-card.all-done{animation:completePulse .6s ease-in-out}
@keyframes completePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
.progress-overview{flex-direction:column;text-align:center}
.progress-stats{justify-content:center}

@media(max-width:900px){
  .progress-rings{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:600px){
  .progress-rings{grid-template-columns:repeat(2,1fr)}
}
</style>
