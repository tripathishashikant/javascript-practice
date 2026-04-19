# Project Design Tokens & Patterns

## Core Colors (from _variables.scss)
- `$color-bg-page`: `#101010` (Body background)
- `$color-bg-surface`: `#181818` (Panel/Card background)
- `$color-border-subtle`: `#202020` (Divider lines/Borders)
- `$color-text-high`: `#a0cfff` (Primary Blue - Headings)
- `$color-text-med`: `#6b99cc` (Secondary Blue - Copy/Intro)

## Structural Tokens
- **Border Radius**: `1.35rem` (Used for Hero and Panels)
- **Transitions**: `180ms ease` (`$transition-soft`)
- **App Shell Width**: `min(780px, calc(100% - 3rem))`

## SMACSS + BEM Prefixes
- `l-`: Layout (e.g., `.l-app-shell`)
- `m-`: Module (e.g., `.m-home`, `.m-problem-workspace`)
- `c-`: Component (e.g., `.c-home-card`, `.c-difficulty-token`)

## Standard Module Pattern
Modules typically use `$color-bg-surface` and the standard radius:
```scss
.m-[module-name]__panel {
  background: $color-bg-surface;
  padding: 1.5rem;
  border-radius: 1.35rem;
  overflow: hidden;
}
```

## Standard Component Pattern
Components often use transparent backgrounds with a top border separator:
```scss
.c-[component-name] {
  position: relative;
  background: transparent;
  transition: transform $transition-soft;

  &::before {
    position: absolute;
    top: 0;
    right: 1rem;
    left: 1rem;
    height: 1px;
    background: $color-border-subtle;
    content: '';
  }

  &:hover {
    transform: translateY(-2px);
  }
}
```
