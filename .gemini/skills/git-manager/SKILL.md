---
name: git-manager
description: Manages the project's Git Flow, including feature branching, milestone PRs, SemVer versioning, and release tagging. Use when starting new features, preparing releases, or managing branch lifecycle.
---

# Git Manager Skill

This skill enforces a production-grade Git Flow for the JS LAB project.

## 1. Branch Naming Conventions
- **Milestone Branches**: `milestone-v<Major>.<Minor>` (e.g., `milestone-v1.0`).
- **Feature Branches**: `feat-<issueNumber>-<featureName>` (e.g., `feat-101-add-array-exercises`).
- **Standard Branches**: `main` (production), `develop` (integration).

## 2. Feature Workflow
When a user asks to start a new feature:
1. Identify the current active **Milestone** branch.
2. Create and switch to a new feature branch: `git checkout -b feat-<issue>-<name>`.
3. Perform atomic auto-commits (handled by system hooks).

## 3. Pull Request & Merge Lifecycle
- **Feature -> Milestone**: Create a PR from the feature branch targeting the current `milestone-vX.X`.
- **Milestone -> Develop**: When all issues for a milestone are complete, create a PR targeting `develop`.
- **Develop -> Main**: Create a PR from `develop` to `main` for final release.

## 4. SemVer & Release Tagging
Before merging `develop` to `main`:
1. Determine the next version based on changes (Patch: bug fixes, Minor: new features, Major: breaking changes).
2. Update `version` in `package.json`.
3. Commit the version bump: `git commit -m "chore: bump version to vX.X.X"`.
4. Create a git tag: `git tag -a vX.X.X -m "Release vX.X.X"`.
5. Push the tag: `git push origin vX.X.X`.

## 5. Repository Protection Reminders
Ensure the following are enabled in GitHub:
- Require signed commits for `main` and `develop`.
- Require PR reviews (at least 1 reviewer).
- Prevent direct pushes to `main` and `develop`.
- Force status checks (build/lint) to pass before merge.
