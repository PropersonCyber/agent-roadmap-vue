export interface Task {
  id: string
  text: string
}

export interface Week {
  id: string
  num: string
  title: string
  goal: string
  deliverable: string
  tasks: Task[]
}

export interface Month {
  id: string
  num: string
  title: string
  goal: string
  hours: string
  weeks: Week[]
}

export interface Streak {
  count: number
  lastDate: string | null
}

export type TaskFilter = 'all' | 'incomplete' | 'complete'

export interface MonthCount {
  total: number
  done: number
}

export interface OverallProgress {
  total: number
  done: number
  pct: number
}
