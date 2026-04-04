# JavaScript Practice Lab

This repository started as a place to practice core JavaScript concepts through small exercises and is now being shaped into an interactive learning website.

The current direction is to build a Vue 3 + Vite + TypeScript practice lab where users can explore exercises, edit code in the browser, run examples, and reset back to the original state on reload.

## Current Stack

- Vue 3
- Vite
- TypeScript
- SCSS
- SMACSS-style stylesheet structure
- BEM naming conventions for UI modules

## Project Goal

The long-term goal is to create a JavaScript practice website that allows learners to:

- browse exercises by topic
- read problem statements and examples
- edit starter code in a playground
- run code and inspect output
- start fresh on reload without saving temporary edits

The intended visual direction is a glassmorphism-inspired interface.

## Current Structure

```text
src/
  assets/styles/   # SCSS layers: base, layout, modules, state, theme
  components/      # Reusable Vue UI components
  data/            # Local structured exercise data
  types/           # Shared TypeScript interfaces
  views/           # Page-level Vue views
```

## Development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Run a type check:

```bash
npx vue-tsc --noEmit
```

Create a production build:

```bash
npm run build
```

## Notes

- Existing JavaScript exercise content can be moved into `src` incrementally.
- The architecture is intentionally being kept simple and learning-friendly while the playground experience is built out.
