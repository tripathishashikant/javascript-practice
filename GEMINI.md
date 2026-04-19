# Gemini Workspace Mandates

## Core Mission
Build a simple, welcoming, and interactive JavaScript practice lab (Vue 3 + Vite + TypeScript). 
- **Goal**: A focused practice playground where learners browse exercises by topic, edit code in-browser, and start each session fresh.
- **Visual Style**: A clean, focused interface that feels "alive" and interactive, optimized for learning.

## Tech Stack & Conventions
- **UI**: Vue 3 (Composition API), Vite, Pinia.
- **Editor**: Monaco Editor for the practice playground.
- **Styling**: SCSS using SMACSS organization and BEM naming conventions.

## Development Philosophy
- **Simplicity First**: Prefer clear, readable structure over clever or complex abstractions.
- **Incremental Growth**: Keep UI implementations manageable and easy to understand as the playground evolves.
- **Ephemeral State**: By design, edits are not persisted across sessions to ensure a fresh start for every learner.

## Git Flow & Versioning (ENFORCED)
- **Branch Strategy**: 
  - `main`: Production-ready code.
  - `develop`: Main integration branch.
  - `milestone-vX.X`: Current milestone target (from `develop`).
  - `feat-<issue>-<name>`: Feature branch (from current milestone).
- **PR Lifecycle**: 
  - `Feature` -> `Milestone` -> `Develop` -> `Main`.
  - All merges to `main` and `develop` MUST happen via PR with code review.
- **Versioning**: 
  - Use **SemVer** (Semantic Versioning).
  - Milestone branches MUST follow `milestone-v<Major>.<Minor>`.
  - Tags MUST follow `v<Major>.<Minor>.<Patch>`.

## Exercise Contribution Workflow
When adding a new exercise, follow this sequence:
1. **Assets**: Create `problem-statement.md`, `starter.js`, and `index.js` in `src/assets/problems/<category>/<problem-name>/`.
2. **Registration**: Update `src/data/exercises.js` using `?raw` imports and add the problem definition to the `categories` array.

## System Rules & Hooks (ENFORCED)
The following behaviors are enforced by system-level hooks in `.gemini/hooks/`:
- **File Protection**: Modifications to `.env`, `package.json`, and core config files are automatically blocked.
- **Auto Commit**: Every successful edit is automatically staged and committed.
- **UI Screenshot**: Every UI-related edit triggers a screenshot notification.
- **Task Notification**: You will receive a desktop notification when long-running tasks finish.

**DO NOT** attempt to bypass these hooks or the Git Flow mandates.
