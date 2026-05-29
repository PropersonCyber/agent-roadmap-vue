## 1. Data Structure Setup

- [x] 1.1 Define Project interface with fields: num, title, difficulty, tags, value, archDiagram
- [x] 1.2 Create projects ref array with 4 existing project data items

## 2. Template Refactoring

- [x] 2.1 Replace 4 hardcoded project-card divs with v-for loop over projects array
- [x] 2.2 Wrap project-num and project-title in a new .project-header div
- [x] 2.3 Ensure all dynamic content uses project property bindings ({{ project.xxx }})

## 3. CSS Adjustments

- [x] 3.1 Add .project-header class with display: flex, align-items: baseline, gap: 12px
- [x] 3.2 Remove margin-bottom from .project-num and .project-title (moved to .project-header)
- [x] 3.3 Update .project-num opacity from 0.08 to 0.4

## 4. Verification

- [x] 4.1 Verify 4 project cards render with correct data
- [x] 4.2 Verify project-num and project-title display in single row with baseline alignment
- [x] 4.3 Verify hover effects (border, shadow, translate) still work
- [x] 4.4 Verify even cards (2nd, 4th) still use RTL alternating layout
- [x] 4.5 Verify responsive breakpoint at 900px switches to single column
