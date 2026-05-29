<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Week } from '@/types/roadmap'
import { useTasks } from '@/composables/useTasks'
import TaskItem from './TaskItem.vue'

const props = defineProps<{
  week: Week
}>()

const { tasks, getWeekProgress, toggleTask } = useTasks()

const open = ref(localStorage.getItem(`roadmap-open-week-${props.week.id}`) === 'true')

const progress = computed(() => getWeekProgress(props.week.id))
const allDone = computed(() => progress.value.done === progress.value.total && progress.value.total > 0)

function toggle() {
  open.value = !open.value
  localStorage.setItem(`roadmap-open-week-${props.week.id}`, open.value ? 'true' : 'false')
}
</script>

<template>
  <div class="week-card" :class="{ open, 'all-done': allDone }" :data-week="week.id">
    <div class="week-header-bar" @click="toggle">
      <span class="week-num">{{ week.num }}</span>
      <span class="week-goal">{{ week.title }}：{{ week.goal }}</span>
      <span class="week-progress-text">{{ progress.done }}/{{ progress.total }}</span>
      <span class="week-chevron">▾</span>
    </div>
    <div class="week-body">
      <div class="task-list">
        <TaskItem
          v-for="t in week.tasks"
          :key="t.id"
          :task="t"
          :done="!!tasks[t.id]"
          @toggle="toggleTask"
        />
      </div>
      <div class="week-deliverable">
        <span class="week-deliverable-icon">📦</span>
        <div><span>本周产出物：</span>{{ week.deliverable }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.week-card{margin-bottom:16px;border-radius:var(--radius);border:1px solid var(--border);background:var(--bg-elevated);overflow:hidden;transition:var(--transition)}
.week-card.all-done{border-color:var(--accent);box-shadow:0 0 16px var(--accent-glow)}
.week-header-bar{display:flex;align-items:center;gap:12px;padding:14px 20px;cursor:pointer;transition:var(--transition)}
.week-header-bar:hover{background:var(--bg-hover)}
.week-num{font-size:12px;font-weight:700;color:var(--accent);padding:3px 10px;border-radius:6px;background:var(--accent-dim);font-family:var(--mono);flex-shrink:0}
.week-goal{font-size:14px;font-weight:600;flex:1}
.week-progress-text{font-size:12px;color:var(--text-muted)}
.week-chevron{font-size:14px;color:var(--text-muted);transition:transform .3s}
.week-card.open .week-chevron{transform:rotate(180deg)}
.week-body{display:none;padding:0 20px 16px}
.week-card.open .week-body{display:block}
.week-deliverable{display:flex;align-items:flex-start;gap:8px;margin-top:12px;padding:10px 16px;border-radius:8px;background:var(--accent-dim);font-size:13px}
.week-deliverable-icon{flex-shrink:0;font-size:16px}
.week-deliverable span{font-weight:600;color:var(--accent)}
</style>
