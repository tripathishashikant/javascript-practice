---
name: exercise-builder
description: Automates the creation and registration of new JavaScript practice exercises. Use when adding a new problem statement, starter code, and reference solution to the repository.
---

# Exercise Builder Skill

This skill ensures every new exercise follows the project structure and is correctly registered.

## 1. Directory Structure
All exercises must live in:
`src/assets/problems/<category>/<problem-name>/`
Files required:
- `problem-statement.md`: Markdown description.
- `starter.js`: Initial code for the learner.
- `index.js`: Reference solution.

## 2. Template Usage
Refer to [templates.md](references/templates.md) for the standard boilerplate for each file.

## 3. Registration Workflow
After creating the files, update `src/data/exercises.js`:
1.  **Import Assets**: Use `?raw` imports at the top of the file.
    ```javascript
    import myProblemCode from '@/assets/problems/<category>/<problem-name>/index.js?raw';
    import myProblemStatement from '@/assets/problems/<category>/<problem-name>/problem-statement.md?raw';
    import myProblemStarter from '@/assets/problems/<category>/<problem-name>/starter.js?raw';
    ```
2.  **Add to Category**: Find the relevant category in the `categories` array and push the new problem object.
    ```javascript
    {
      id: '<category>-<problem-name>',
      categoryId: '<category>',
      title: '<Problem Title>',
      summary: '<Short Summary>',
      difficulty: 'easy|medium|hard',
      concept: '<Core Concept>',
      description: myProblemStatement.trim(),
      examples: [...],
      constraints: [...],
      starterCode: myProblemStarter,
      solutionCode: myProblemCode,
    }
    ```

## 4. Automation Command
To quickly scaffold a new exercise, you can use the `generalist` sub-agent with this prompt:
"Create a new exercise in category '<category>' named '<name>' with title '<Title>'. Use templates from exercise-builder skill."
