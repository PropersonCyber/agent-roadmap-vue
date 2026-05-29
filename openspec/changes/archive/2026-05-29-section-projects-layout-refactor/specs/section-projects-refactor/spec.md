## ADDED Requirements

### Requirement: Project number and title display in single row
The component SHALL display project number and project title in the same visual row using flex layout.

#### Scenario: Default card layout
- **WHEN** a project card is rendered
- **THEN** the project number and project title SHALL be horizontally aligned with 12px gap
- **AND** they SHALL be baseline-aligned
- **AND** the project number opacity SHALL be 0.4

### Requirement: Project data structured as array
The component SHALL define project data as a typed array and render cards using v-for.

#### Scenario: Rendering multiple projects
- **WHEN** the projects array contains 4 items
- **THEN** 4 project cards SHALL be rendered
- **AND** each card SHALL display the corresponding project data

#### Scenario: Project data interface
- **WHEN** project data is defined
- **THEN** it SHALL include: num (string), title (string), difficulty (object with stars and label), tags (string array), value (object with title and desc), archDiagram (string)

### Requirement: Existing card styles preserved
The component SHALL maintain all existing visual styles and behaviors.

#### Scenario: Card hover state
- **WHEN** user hovers over a project card
- **THEN** the card border color SHALL change to accent color
- **AND** the card SHALL have shadow and translate up by 2px

#### Scenario: Even card alternating layout
- **WHEN** an even-indexed project card is rendered (2nd or 4th)
- **THEN** the card content SHALL be displayed in RTL direction (right-to-left layout)
- **AND** the nested content SHALL maintain LTR direction

#### Scenario: Responsive breakpoint
- **WHEN** viewport width is 900px or less
- **THEN** project cards SHALL switch to single-column layout
- **AND** even cards SHALL NOT use RTL direction
