## ADDED Requirements

### Requirement: Module-level singleton pattern

All composables SHALL use module-level singleton state to enable cross-component sharing without Provide/Inject.

#### Scenario: Singleton ref declaration
- **WHEN** a composable module is imported
- **THEN** reactive state SHALL be declared at module scope (outside the factory function)
- **AND** the factory function `useXxx()` SHALL return the same module-scoped ref instances
- **AND** all callers SHALL share the same reactive state

### Composable: useTasks

The `useTasks()` composable SHALL manage all task completion state, progress computation, filtering, streak tracking, and reset logic.

#### Scenario: Reactive state
- **WHEN** `useTasks()` is called
- **THEN** it SHALL return `tasks` (Record<string, boolean>), `streak` (Streak), `currentFilter` (TaskFilter)
- **AND** `tasks` SHALL be initialized from `localStorage['agent-roadmap-tasks-v2']`
- **AND** `streak` SHALL be initialized from `localStorage['agent-roadmap-streak']`

#### Scenario: toggleTask
- **WHEN** `toggleTask(taskId)` is called
- **THEN** if `tasks[taskId]` is truthy, the key SHALL be deleted
- **AND** if falsy, the key SHALL be set to `true`
- **AND** the updated tasks SHALL be persisted to localStorage immediately
- **AND** `updateStreak()` SHALL be called

#### Scenario: overallProgress
- **WHEN** `overallProgress` is accessed
- **THEN** it SHALL return `{ total: number, done: number, pct: number }`
- **AND** `pct` SHALL be `Math.round((done / total) * 100)`

#### Scenario: getMonthProgress
- **WHEN** `getMonthProgress(monthId)` is called with a valid monthId
- **THEN** it SHALL return `{ total: number, done: number, pct: number }` for that month
- **WHEN** called with an invalid monthId
- **THEN** it SHALL return `{ total: 0, done: 0, pct: 0 }`

#### Scenario: getWeekProgress
- **WHEN** `getWeekProgress(weekId)` is called with a valid weekId
- **THEN** it SHALL return `{ total: number, done: number }` for that week
- **WHEN** called with an invalid weekId
- **THEN** it SHALL return `{ total: 0, done: 0 }`

#### Scenario: filterCounts
- **WHEN** `filterCounts` is accessed
- **THEN** it SHALL return `{ all: number, incomplete: number, complete: number }`
- **AND** `all` = total tasks, `complete` = done tasks, `incomplete` = total - done

#### Scenario: resetAll
- **WHEN** `resetAll()` is called
- **THEN** all task states SHALL be cleared
- **AND** all localStorage keys (`agent-roadmap-tasks-v2`, `celebrated-*`, `agent-roadmap-streak`) SHALL be removed

#### Scenario: updateStreak
- **WHEN** `updateStreak()` is called
- **THEN** it SHALL compare `lastDate` with today's ISO date
- **AND** if lastDate is today, SHALL NOT increment
- **AND** if lastDate is yesterday, SHALL increment count by 1
- **AND** otherwise, SHALL reset count to 1
- **AND** persist to `localStorage['agent-roadmap-streak']`

#### Scenario: checkMonthComplete
- **WHEN** `checkMonthComplete()` is called
- **THEN** it SHALL iterate all months
- **AND** if a month's done === total and not previously celebrated, SHALL return that month
- **AND** otherwise return null

### Composable: useTheme

The `useTheme()` composable SHALL manage theme state and DOM attribute binding.

#### Scenario: Initialization
- **WHEN** the composable mounts
- **THEN** it SHALL read `localStorage['agent-roadmap-theme']`
- **AND** default to `'dark'` if no saved preference
- **AND** set `document.documentElement` `data-theme` attribute

#### Scenario: toggleTheme
- **WHEN** `toggleTheme()` is called
- **THEN** `theme` ref SHALL switch between `'dark'` and `'light'`
- **AND** the watcher SHALL update `data-theme` on `<html>`
- **AND** persist the new value to `localStorage['agent-roadmap-theme']`

#### Scenario: Theme watcher
- **WHEN** `theme` ref changes
- **THEN** the watcher SHALL immediately apply the attribute and persist
- **AND** both operations SHALL be synchronous

### Composable: useToast

The `useToast()` composable SHALL manage temporary toast notifications.

#### Scenario: State definition
- **WHEN** `useToast()` is called
- **THEN** it SHALL return `toast` (ref<ToastState>) and `showToast` (function)
- **AND** `ToastState` SHALL have fields: `visible: boolean`, `message: string`, `celebrate: boolean`

#### Scenario: showToast behavior
- **WHEN** `showToast(message, celebrate?)` is called
- **THEN** the toast SHALL become visible with the given message
- **AND** if `celebrate` is true, the celebrate flag SHALL be set
- **AND** any existing timer SHALL be cleared
- **AND** a new timer SHALL auto-hide the toast after 3000ms

#### Scenario: Timer safety
- **WHEN** `showToast` is called multiple times rapidly
- **THEN** only the last call's timer SHALL be active
- **AND** the previous timer SHALL be cleared to prevent premature hide

### Composable: useConfetti

The `useConfetti()` composable SHALL manage confetti particle effects.

#### Scenario: State definition
- **WHEN** `useConfetti()` is called
- **THEN** it SHALL return `pieces` (ref<ConfettiPiece[]>) and `spawnConfetti` (function)

#### Scenario: spawnConfetti behavior
- **WHEN** `spawnConfetti(count)` is called with count=60
- **THEN** 60 ConfettiPiece objects SHALL be generated
- **AND** each piece SHALL have random: left (0-100%), top (negative), color (from 8-color palette), width (6-14px), height (6-14px), delay (0-0.8s), duration (1.5-2.5s)
- **AND** pieces SHALL be appended to the `pieces` array
- **AND** after 2500ms, `pieces` SHALL be cleared

### Composable: useReveal

The `useReveal()` composable SHALL enable IntersectionObserver-based scroll reveal animations.

#### Scenario: Setup
- **WHEN** `useReveal()` is called
- **THEN** it SHALL return a template ref for targeted observation
- **AND** SHALL create an IntersectionObserver with `threshold: 0.1` and `rootMargin: '0px 0px -40px 0px'`
- **AND** SHALL observe both the returned ref element and all `.reveal` elements in the document

#### Scenario: Visibility trigger
- **WHEN** a `.reveal` element intersects the viewport
- **THEN** the observer SHALL add `visible` class to that element
- **AND** SHALL `unobserve` that element to prevent re-triggering

#### Scenario: Cleanup
- **WHEN** the component unmounts
- **THEN** the observer SHALL be disconnected (native onMounted/IntersectionObserver lifecycle)
