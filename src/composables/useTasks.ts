import { ref, computed } from 'vue'
import type { Streak, TaskFilter } from '@/types/roadmap'
import { roadmapData } from '@/data/roadmapData'

const TASKS_KEY = 'agent-roadmap-tasks-v2'
const STREAK_KEY = 'agent-roadmap-streak'

const tasks = ref<Record<string, boolean>>(loadTasks())
const streak = ref<Streak>(loadStreak())

function loadTasks(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(TASKS_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks.value))
  updateStreak()
}

function loadStreak(): Streak {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || 'null') || { count: 0, lastDate: null }
  } catch {
    return { count: 0, lastDate: null }
  }
}

function updateStreak() {
  const today = new Date().toISOString().split('T')[0]
  if (streak.value.lastDate === today) return
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  streak.value.count = streak.value.lastDate === yesterday ? streak.value.count + 1 : 1
  streak.value.lastDate = today
  localStorage.setItem(STREAK_KEY, JSON.stringify(streak.value))
}

export function useTasks() {
  const currentFilter = ref<TaskFilter>('all')

  const overallProgress = computed(() => {
    let total = 0, done = 0
    for (const m of roadmapData) {
      for (const w of m.weeks) {
        for (const t of w.tasks) {
          total++
          if (tasks.value[t.id]) done++
        }
      }
    }
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  })

  function getMonthProgress(monthId: string) {
    const month = roadmapData.find(m => m.id === monthId)
    if (!month) return { total: 0, done: 0, pct: 0 }
    let total = 0, done = 0
    for (const w of month.weeks) {
      for (const t of w.tasks) {
        total++
        if (tasks.value[t.id]) done++
      }
    }
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  }

  function getWeekProgress(weekId: string) {
    for (const m of roadmapData) {
      for (const w of m.weeks) {
        if (w.id === weekId) {
          const done = w.tasks.filter(t => tasks.value[t.id]).length
          return { total: w.tasks.length, done }
        }
      }
    }
    return { total: 0, done: 0 }
  }

  function toggleTask(taskId: string) {
    if (tasks.value[taskId]) {
      delete tasks.value[taskId]
    } else {
      tasks.value[taskId] = true
    }
    saveTasks()
    checkMonthComplete()
  }

  function checkMonthComplete() {
    for (const m of roadmapData) {
      const { total, done } = getMonthProgress(m.id)
      if (total > 0 && done === total && !localStorage.getItem(`celebrated-${m.id}`)) {
        localStorage.setItem(`celebrated-${m.id}`, 'true')
        return m
      }
    }
    return null
  }

  const filterCounts = computed(() => {
    let total = 0, done = 0
    for (const m of roadmapData) {
      for (const w of m.weeks) {
        for (const t of w.tasks) {
          total++
          if (tasks.value[t.id]) done++
        }
      }
    }
    return { all: total, incomplete: total - done, complete: done }
  })

  function resetAll() {
    tasks.value = {}
    localStorage.removeItem(TASKS_KEY)
    roadmapData.forEach(m => localStorage.removeItem(`celebrated-${m.id}`))
    streak.value = { count: 0, lastDate: null }
    localStorage.removeItem(STREAK_KEY)
  }

  return {
    tasks,
    streak,
    currentFilter,
    overallProgress,
    filterCounts,
    getMonthProgress,
    getWeekProgress,
    toggleTask,
    checkMonthComplete,
    resetAll
  }
}
