<script setup lang="ts">
import type { Task } from '@/types/roadmap'

const props = defineProps<{
  task: Task
  done: boolean
}>()

const emit = defineEmits<{
  toggle: [taskId: string]
}>()
</script>

<template>
  <div
    class="task-item"
    :class="{ done }"
    @click="emit('toggle', task.id)"
  >
    <div class="task-checkbox"></div>
    <span class="task-text">{{ task.text }}</span>
  </div>
</template>

<style scoped>
.task-item{display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:var(--transition);border:1px solid transparent}
.task-item:hover{background:var(--bg-hover);border-color:var(--border)}
.task-checkbox{flex-shrink:0;width:20px;height:20px;border-radius:6px;border:2px solid var(--border-strong);display:flex;align-items:center;justify-content:center;transition:var(--transition);margin-top:1px}
.task-item.done .task-checkbox{background:var(--accent);border-color:var(--accent);animation:checkPop .3s cubic-bezier(.4,0,.2,1)}
.task-checkbox::after{content:'\2713';font-size:11px;color:#fff;font-weight:700;opacity:0;transform:scale(0);transition:var(--transition)}
.task-item.done .task-checkbox::after{opacity:1;transform:scale(1)}
.task-text{font-size:14px;color:var(--text-secondary);line-height:1.5;flex:1}
.task-item.done .task-text{color:var(--text-muted);text-decoration:line-through}
@keyframes checkPop{0%{transform:scale(1)}40%{transform:scale(1.2)}100%{transform:scale(1)}}
</style>
