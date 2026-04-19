---
name: ui-validator
description: Enforces the project's specific SMACSS/BEM styling and design tokens. Use when creating or updating Vue components to ensure they match the "clean and focused" project aesthetic.
---

# UI Validator Skill

This skill ensures that all UI changes align with the project's established styling patterns.

## 1. SMACSS + BEM Conventions
Always use the following prefixes for class names:
- **`l-`**: Layout-level containers (e.g., `.l-app-shell`).
- **`m-`**: Module-level sections (e.g., `.m-home__hero`).
- **`c-`**: Reusable components (e.g., `.c-home-card`).

## 2. Visual Mandates
- **Backgrounds**: Use `$color-bg-surface` for cards/panels; avoid hardcoded hex codes.
- **Rounding**: Standard panel/hero radius is `1.35rem`.
- **Spacing**: Use consistent REM units (typically `1.5rem` to `2rem` for module padding).
- **Transitions**: Use `$transition-soft` (`180ms ease`) for interactive states.

## 3. Style Enforcement
Refer to [design-tokens.md](references/design-tokens.md) for precise variable names and established patterns (like the "top-border separator" component style).

## 4. Best Practices
- **Scoped SCSS**: Always use `<style lang="scss" scoped>` in Vue files.
- **BEM strictly**: Ensure Elements (`__`) and Modifiers (`--`) are applied correctly to the block.
- **Modular Imports**: Use `@use '@/assets/styles/utils/variables' as *;` in every style block.

## 5. Audit Prompt
To check a component, use:
"Audit 'src/components/<ComponentName>.vue'. Ensure it uses SMACSS prefixes (l-, m-, c-), design tokens from ui-validator, and follows the project's 'clean and focused' aesthetic."
