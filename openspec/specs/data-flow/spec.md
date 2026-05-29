## ADDED Requirements

### Requirement: Data model hierarchy

The data model SHALL follow a strict hierarchical structure: Month -> Week -> Task.

#### Scenario: Month structure
- **WHEN** a Month object is defined
- **THEN** it SHALL have fields: `id`, `num`, `title`, `goal`, `hours`, `weeks`
- **AND** `id` SHALL be a unique string identifier (e.g. `month1`, `month2`)
- **AND** `weeks` SHALL be a `Week[]` array

#### Scenario: Week structure
- **WHEN** a Week object is defined
- **THEN** it SHALL have fields: `id`, `num`, `title`, `goal`, `deliverable`, `tasks`
- **AND** `tasks` SHALL be a `Task[]` array

#### Scenario: Task structure
- **WHEN** a Task object is defined
- **THEN** it SHALL have fields: `id`, `text`
- **AND** `id` SHALL be unique across all tasks (e.g. `m1w1t1`)

### Requirement: Data source

All roadmap data SHALL be defined in a single source-of-truth file.

#### Scenario: Data import
- **WHEN** any component or composable needs roadmap data
- **THEN** it SHALL import from `@/data/roadmapData`
- **AND** `roadmapData` SHALL be the only source for Month/Week/Task definitions

### Requirement: Task completion state flow

Task completion state SHALL flow from user interaction through composable to localStorage to reactive UI.

#### Scenario: User toggles a task
- **WHEN** a TaskItem is clicked
- **THEN** it SHALL emit `toggle` with the task `id`
- **AND** WeekCard SHALL call `toggleTask(taskId)` from `useTasks()`
- **AND** the composable SHALL update the `tasks` ref (add or delete key)
- **AND** the composable SHALL persist to localStorage under key `agent-roadmap-tasks-v2`
- **AND** all consuming components SHALL reactively update

#### Scenario: Loading persisted state
- **WHEN** the app is loaded
- **THEN** `useTasks()` SHALL read from `localStorage['agent-roadmap-tasks-v2']`
- **AND** if parsing fails, SHALL default to `{}`

### Requirement: Progress computation chain

Progress values SHALL be computed derived state, not stored separately.

#### Scenario: Overall progress
- **WHEN** `overallProgress` is accessed
- **THEN** it SHALL iterate all months/weeks/tasks comparing against `tasks` ref
- **AND** return `{ total, done, pct }` where `pct = Math.round((done / total) * 100)`

#### Scenario: Month progress
- **WHEN** `getMonthProgress(monthId)` is called
- **THEN** it SHALL find the month by id in `roadmapData`
- **AND** count done/total for all tasks within that month
- **AND** return `{ total, done, pct }`

#### Scenario: Week progress
- **WHEN** `getWeekProgress(weekId)` is called
- **THEN** it SHALL traverse all months to find the week by id
- **AND** return `{ total, done }`

### Requirement: Filter computation

Filter state SHALL control which months and weeks are visible.

#### Scenario: Filter types
- **WHEN** `currentFilter` is set to `'all'`
- **THEN** all months and weeks SHALL be visible
- **WHEN** set to `'incomplete'`
- **THEN** only months/weeks with at least one incomplete task SHALL be visible
- **WHEN** set to `'complete'`
- **THEN** only months/weeks with at least one completed task SHALL be visible

#### Scenario: Filter counts
- **WHEN** `filterCounts` is accessed
- **THEN** it SHALL return `{ all, incomplete, complete }` derived from tasks state

### Requirement: Streak tracking

Learning streak SHALL be derived from task completion dates.

#### Scenario: Streak update
- **WHEN** a task is toggled
- **THEN** `updateStreak()` SHALL be called
- **AND** if `lastDate` is today, SHALL not increment
- **AND** if `lastDate` is yesterday, SHALL increment by 1
- **AND** if `lastDate` is older, SHALL reset to 1

### Requirement: Month completion celebration

When a month is fully completed, the system SHALL trigger celebration.

#### Scenario: Completion detection
- **WHEN** `toggleTask` is called
- **THEN** `checkMonthComplete()` SHALL check all months
- **AND** if a month's `done === total` and not previously celebrated
- **THEN** it SHALL set `localStorage['celebrated-{monthId}']`
- **AND** SectionRoadmap SHALL call `showToast` and `spawnConfetti`

#### Scenario: Prevent duplicate celebration
- **WHEN** a month is already celebrated
- **THEN** `localStorage['celebrated-{monthId}']` SHALL prevent re-triggering

### Requirement: Reset behavior

Resetting progress SHALL clear all persisted state.

#### Scenario: Full reset
- **WHEN** `resetAll()` is called
- **THEN** `tasks` ref SHALL be set to `{}`
- **AND** `localStorage['agent-roadmap-tasks-v2']` SHALL be removed
- **AND** all `celebrated-*` keys SHALL be removed
- **AND** streak SHALL reset to `{ count: 0, lastDate: null }`
