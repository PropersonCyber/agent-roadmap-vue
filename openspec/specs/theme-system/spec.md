## ADDED Requirements

### Requirement: CSS variable definitions

All visual design tokens SHALL be defined as CSS custom properties in `:root`.

#### Scenario: Color tokens
- **WHEN** the application renders in light mode
- **THEN** `--bg` SHALL be `#fafafa`
- **AND** `--text` SHALL be `#18181b`
- **AND** `--accent` SHALL be `#10b981`
- **AND** primary color tokens SHALL use hex values; transparency/glow variants SHALL use rgba

#### Scenario: Layout tokens
- **WHEN** the application renders
- **THEN** `--nav-h` SHALL be `64px`
- **AND** `--max-w` SHALL be `1200px`
- **AND** `--radius` SHALL be `12px`
- **AND** `--radius-lg` SHALL be `16px`
- **AND** `--radius-xl` SHALL be `24px`

#### Scenario: Typography tokens
- **WHEN** the application renders
- **THEN** `--font` SHALL be the system font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif`
- **AND** `--mono` SHALL be the monospace stack: `'SF Mono', 'Fira Code', 'Cascadia Code', monospace`

#### Scenario: Shadow tokens
- **WHEN** the application renders
- **THEN** `--shadow-sm` SHALL be `0 1px 2px rgba(0,0,0,.04)`
- **AND** `--shadow-md` SHALL be `0 4px 16px rgba(0,0,0,.06)`
- **AND** `--shadow-lg` SHALL be `0 8px 32px rgba(0,0,0,.08)`

### Requirement: Theme switching

The application SHALL support light and dark themes toggled via `[data-theme]` attribute.

#### Scenario: Dark mode variables
- **WHEN** `[data-theme="dark"]` is set on `<html>`
- **THEN** `--bg` SHALL be `#09090b`
- **AND** `--text` SHALL be `#fafafa`
- **AND** `--accent-dim` SHALL be `rgba(16,185,129,.15)`
- **AND** all dark mode variables SHALL re-declare in the `[data-theme="dark"]` selector

#### Scenario: Theme toggle
- **WHEN** user clicks the theme toggle button
- **THEN** `useTheme()` SHALL switch `theme` ref between `'dark'` and `'light'`
- **AND** set `document.documentElement` `data-theme` attribute to the current theme
- **AND** persist the preference to `localStorage['agent-roadmap-theme']`
- **AND** on mount, SHALL restore the saved theme from localStorage

#### Scenario: NavBar backdrop adaptation
- **WHEN** theme is light
- **THEN** `.nav` background SHALL be `rgba(255,255,255,.72)` with `backdrop-filter: blur(20px)`
- **WHEN** theme is dark
- **THEN** `.nav` background SHALL be `rgba(9,9,11,.72)` with `backdrop-filter: blur(20px)`

### Requirement: Reset styles

All elements SHALL have a consistent baseline reset.

#### Scenario: Box sizing
- **WHEN** any element renders
- **THEN** `box-sizing` SHALL be `border-box` for all elements via universal selector
- **AND** `margin` and `padding` SHALL be `0`

#### Scenario: Body defaults
- **WHEN** the body element renders
- **THEN** `font-family` SHALL be `var(--font)`
- **AND** `background` SHALL be `var(--bg)`
- **AND** `color` SHALL be `var(--text)`
- **AND** `-webkit-font-smoothing` SHALL be `antialiased`
- **AND** `overflow-x` SHALL be `hidden`

### Requirement: Scroll behavior

The document SHALL have smooth scrolling and proper scroll padding.

#### Scenario: Smooth scroll
- **WHEN** any anchor link is clicked
- **THEN** `html` SHALL use `scroll-behavior: smooth`
- **AND** `scroll-padding-top` SHALL be `calc(var(--nav-h) + 24px)`

### Requirement: Reveal animation system

The application SHALL provide a scroll-triggered fade-in animation system.

#### Scenario: Reveal classes
- **WHEN** an element has class `.reveal`
- **THEN** it SHALL initially have `opacity: 0` and `transform: translateY(32px)`
- **WHEN** it enters the viewport (`threshold: 0.1`, `rootMargin: -40px`)
- **THEN** `useReveal()` SHALL add class `visible`
- **AND** `.reveal.visible` SHALL set `opacity: 1` and `transform: translateY(0)` over 0.7s

#### Scenario: Staggered delay
- **WHEN** multiple `.reveal` elements are in the same container
- **THEN** `.reveal-delay-1` SHALL delay 0.1s
- **AND** `.reveal-delay-2` SHALL delay 0.2s
- **AND** `.reveal-delay-3` SHALL delay 0.3s
- **AND** `.reveal-delay-4` SHALL delay 0.4s

### Requirement: Responsive breakpoints

The application SHALL adapt layout at defined breakpoints.

#### Scenario: Tablet breakpoint (max-width: 900px)
- **WHEN** viewport width is <= 900px
- **THEN** `.card-grid` SHALL switch to 2-column layout
- **AND** nav links SHALL become hamburger menu
- **AND** `.progress-rings` SHALL switch to 3-column grid
- **AND** `.skill-level` SHALL become single-column
- **AND** `.project-card` SHALL become single-column with LTR for all items

#### Scenario: Mobile breakpoint (max-width: 600px)
- **WHEN** viewport width is <= 600px
- **THEN** `.card-grid` SHALL switch to 1-column
- **AND** sections SHALL reduce padding to 72px top/bottom
- **AND** `.hero-stats` SHALL become single-column
- **AND** `.progress-rings` SHALL switch to 2-column
- **AND** `.month-header-bar` SHALL become vertical flex layout
