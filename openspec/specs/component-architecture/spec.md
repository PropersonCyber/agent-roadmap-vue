## ADDED Requirements

### Requirement: Page layout structure

The application SHALL follow a single-page layout with fixed top navigation and vertically scrolling sections.

#### Scenario: App shell
- **WHEN** the app is mounted
- **THEN** a fixed NavBar SHALL be rendered at the top with `z-index: 1000`
- **AND** a progress bar SHALL be rendered at `top: var(--nav-h)` showing scroll progress
- **AND** section contents SHALL scroll with `scroll-padding-top: calc(var(--nav-h) + 24px)`

#### Scenario: Section ordering
- **WHEN** the app renders all sections
- **THEN** the sections SHALL appear in this vertical order: HeroSection, ProgressDashboard, SectionIntro, SectionWork, SectionSkills, SectionRoadmap, SectionProjects, SectionCareer, SectionResources, FooterSection
- **AND** each section SHALL have an `id` attribute matching its nav link target

### Requirement: NavBar behavior

The navigation bar SHALL provide section navigation, scroll tracking, and theme toggle.

#### Scenario: Active section tracking
- **WHEN** the user scrolls through the page
- **THEN** the `activeSection` ref SHALL update to the id of the section currently in view (with 100px offset)
- **AND** the corresponding nav link SHALL have class `active`

#### Scenario: Scroll progress indicator
- **WHEN** the page is scrolled
- **THEN** the progress bar width SHALL be `(scrollY / (scrollHeight - innerHeight)) * 100`%
- **AND** it SHALL use a linear gradient from `var(--accent)` to `var(--purple)`

#### Scenario: Mobile responsive
- **WHEN** viewport width is <= 900px
- **THEN** nav links SHALL be hidden by default
- **AND** a hamburger menu button SHALL be displayed
- **AND** clicking the menu button SHALL toggle the nav links visibility

#### Scenario: Theme toggle
- **WHEN** the theme toggle button is clicked
- **THEN** the theme SHALL switch between `dark` and `light`
- **AND** the NavBar background SHALL adapt: `rgba(255,255,255,.72)` for light, `rgba(9,9,11,.72)` for dark

### Requirement: Section component layout patterns

Each section component SHALL follow a consistent structure with `section-header` and content grid.

#### Scenario: Section header structure
- **WHEN** a section renders its header
- **THEN** it SHALL contain `.section-label`, `.section-title`, and `.section-desc` in sequence
- **AND** `.section-title` and `.section-desc` SHALL use the CSS variable design tokens

#### Scenario: Card grid layout
- **WHEN** a section displays multiple cards
- **THEN** it SHALL use `.card-grid` with `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`
- **AND** each card SHALL have hover effect: `translateY(-4px)` + shadow + top gradient bar
- **AND** the gradient bar SHALL be `linear-gradient(90deg, var(--accent), var(--purple))`

### Requirement: MonthSection expand/collapse

The MonthSection component SHALL support accordion expand/collapse with persistent state.

#### Scenario: Toggle open state
- **WHEN** the `.month-header-bar` is clicked
- **THEN** the `open` class SHALL be toggled on `.month-section`
- **AND** the open state SHALL be persisted in localStorage under `roadmap-open-{monthId}`

#### Scenario: Chevron rotation
- **WHEN** `.month-section` has class `open`
- **THEN** the chevron SHALL rotate 180 degrees
- **AND** the `.month-body` SHALL be displayed

### Requirement: WeekCard expand/collapse

The WeekCard component SHALL support accordion expand/collapse with persistent state.

#### Scenario: Toggle open state
- **WHEN** the `.week-header-bar` is clicked
- **THEN** the `open` class SHALL be toggled on `.week-card`
- **AND** the open state SHALL be persisted in localStorage under `roadmap-open-week-{weekId}`

### Requirement: TaskItem interaction

The TaskItem component SHALL display a task with toggleable completion state.

#### Scenario: Task toggle
- **WHEN** a TaskItem is clicked
- **THEN** it SHALL emit `toggle` with the task `id`
- **AND** when done, the checkbox SHALL show a checkmark with `checkPop` animation
- **AND** when done, the text SHALL have `line-through` and muted color

#### Scenario: Visual state
- **WHEN** `done` prop is true
- **THEN** `.task-item` SHALL have class `done`
- **AND** the checkbox SHALL have green (`var(--accent)`) background
- **AND** the text SHALL be styled with `text-decoration: line-through`

### Requirement: ProgressDashboard rendering

The ProgressDashboard SHALL display overall progress ring and per-month mini rings.

#### Scenario: Overall progress ring
- **WHEN** overall progress is calculated
- **THEN** a circular SVG ring SHALL show the completion percentage
- **AND** the ring color SHALL change by threshold: <30% red (`var(--red)` via `.low`), <60% orange (`var(--orange)` via `.half`), <100% blue (`var(--blue)` via `.almost`), 100% green (`var(--accent)` default)

#### Scenario: Month rings
- **WHEN** per-month progress is calculated
- **THEN** each month SHALL have a mini ring with its assigned color
- **AND** clicking a month ring SHALL emit `scrollToMonth` with the month id

### Requirement: SectionSkills ability bars

The SectionSkills SHALL animate vertical bars on scroll using IntersectionObserver.

#### Scenario: Bar animation
- **WHEN** an `.ability-bar` enters the viewport
- **THEN** its height SHALL animate from 0 to the `data-target` value over 1.2s
- **AND** the observer SHALL `unobserve` after triggering to prevent re-triggering

### Requirement: SectionResources tab switching

The SectionResources SHALL support client-side tab switching.

#### Scenario: Tab switch
- **WHEN** a resource tab button is clicked
- **THEN** `activeTab` ref SHALL update to the selected tab id
- **AND** the corresponding `.resource-panel` SHALL receive class `active` and be displayed
- **AND** other panels SHALL be hidden

### Requirement: ToastNotification behavior

The ToastNotification SHALL display temporary messages with optional celebration style.

#### Scenario: Show toast
- **WHEN** `showToast` is called
- **THEN** the toast SHALL become visible with `translateY(0)`
- **AND** it SHALL auto-hide after 3000ms
- **AND** if `celebrate` is true, the toast SHALL use a gradient background

### Requirement: ConfettiEffect behavior

The ConfettiEffect SHALL render animated confetti pieces on demand.

#### Scenario: Spawn confetti
- **WHEN** `spawnConfetti` is called with 60 pieces
- **THEN** confetti pieces SHALL animate from top to bottom over 1.5-2.5s
- **AND** pieces SHALL be removed after 2500ms

### Requirement: SectionProjects project card layout
SectionProjects SHALL render project cards with data-driven templates and consistent visual hierarchy.

#### Scenario: Project card header layout
- **WHEN** a project card header is rendered
- **THEN** the project number and project title SHALL be horizontally aligned with 12px gap
- **AND** they SHALL be baseline-aligned
- **AND** the project number opacity SHALL be 0.4

#### Scenario: Data-driven card rendering
- **WHEN** the projects array contains items
- **THEN** project cards SHALL be rendered using `v-for`
- **AND** each card SHALL display the corresponding project data

#### Scenario: Project data structure
- **WHEN** project data is defined
- **THEN** it SHALL include: num (string), title (string), difficulty (object with stars and label), tags (string array), value (object with title and desc), archDiagram (string)

#### Scenario: Card visual states
- **WHEN** user hovers over a project card
- **THEN** the card border color SHALL change to accent color
- **AND** the card SHALL have shadow and translate up by 2px

#### Scenario: Alternating card layout
- **WHEN** an even-indexed project card is rendered (2nd, 4th, etc.)
- **THEN** the card content SHALL be displayed in RTL direction
- **AND** the nested content SHALL maintain LTR direction

#### Scenario: Card responsive behavior
- **WHEN** viewport width is 900px or less
- **THEN** project cards SHALL switch to single-column layout
- **AND** even cards SHALL NOT use RTL direction
