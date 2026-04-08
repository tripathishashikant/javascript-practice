import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { categories } from '@/data/exercises';

function formatConsoleValue(value) {
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
export const useProblemStore = defineStore('problemStore', () => {
  const displayMode = ref('grid');
  const selectedCategoryId = ref(categories[0]?.id ?? '');
  const activeProblemId = ref(categories[0]?.problems[0]?.id ?? '');
  const editorCode = ref(categories[0]?.problems[0]?.starterCode ?? '');
  const editorPreset = ref('starter');
  const activeRunId = ref(0);
  const consoleOutput = ref([
    'Console ready.',
    '[Log]: Select a problem and run the current solution.',
  ]);
  const allProblems = computed(() => categories.flatMap((category) => category.problems));
  const selectedCategory = computed(() =>
    categories.find((category) => category.id === selectedCategoryId.value),
  );
  const activeProblem = computed(() =>
    allProblems.value.find((problem) => problem.id === activeProblemId.value),
  );

  function resetEditor(problem = activeProblem.value) {
    activeRunId.value += 1;
    editorPreset.value = 'starter';
    editorCode.value = problem?.starterCode ?? '';
    consoleOutput.value = [
      'Console ready.',
      '[Log]: Session-only editor state restored to starter code.',
    ];
  }
  function setDisplayMode(mode) {
    displayMode.value = mode;
  }
  function selectCategory(categoryId) {
    const category = categories.find((item) => item.id === categoryId);

    if (!category) {
      return;
    }
    selectedCategoryId.value = categoryId;
    activeProblemId.value = category.problems[0]?.id ?? '';
    resetEditor(category.problems[0]);
  }
  function openProblem(problemId) {
    const problem = allProblems.value.find((item) => item.id === problemId);

    if (!problem) {
      return;
    }
    selectedCategoryId.value = problem.categoryId;
    activeProblemId.value = problemId;
    resetEditor(problem);
  }
  function updateEditorCode(nextValue) {
    editorCode.value = nextValue;
  }

  function loadSolution(problem = activeProblem.value) {
    activeRunId.value += 1;
    editorPreset.value = 'solution';
    if (!problem?.solutionCode) {
      editorPreset.value = 'starter';
      consoleOutput.value = ['[Log]: No solution is available for this problem yet.'];
      return;
    }

    editorCode.value = problem.solutionCode;
    consoleOutput.value = ['[Log]: Solution loaded into the editor.'];
  }

  function toggleSolution(problem = activeProblem.value) {
    if (editorPreset.value === 'solution') {
      resetEditor(problem);
      return;
    }

    loadSolution(problem);
  }
  async function runCode() {
    activeRunId.value += 1;
    const runId = activeRunId.value;
    const logs = [];
    const asyncGraceMs = 3500;
    let noOutputTimerId = null;

    const pushLine = (prefix, args) => {
      if (activeRunId.value !== runId) {
        return;
      }

      if (noOutputTimerId) {
        clearTimeout(noOutputTimerId);
        noOutputTimerId = null;
      }

      logs.push(`${prefix}${args.map(formatConsoleValue).join(' ')}`);
      consoleOutput.value = [...logs];
    };

    const virtualConsole = {
      log: (...args) => pushLine('', args),
      info: (...args) => pushLine('[Info]: ', args),
      warn: (...args) => pushLine('[Warn]: ', args),
      error: (...args) => pushLine('[Error]: ', args),
    };

    consoleOutput.value = ['[Log]: Running...'];

    try {
      const runner = new Function(
        'console',
        `"use strict";\nreturn (async () => {\n${editorCode.value}\n})();`,
      );

      await runner(virtualConsole);

      if (activeRunId.value !== runId) {
        return;
      }

      // If the user code schedules async work (timeouts, un-awaited promises),
      // logs can arrive after the runner finishes. Keep "Running..." for a
      // short grace window to avoid flashing a misleading "no output" warning.
      if (logs.length === 0) {
        noOutputTimerId = setTimeout(() => {
          if (activeRunId.value !== runId) {
            return;
          }

          if (logs.length === 0) {
            consoleOutput.value = [
              '[Log]: Execution completed with no console output.',
              '[Tip]: If you expected delayed output, make sure your async work is awaited (or log immediately).',
            ];
          }
        }, asyncGraceMs);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      if (activeRunId.value === runId) {
        if (noOutputTimerId) {
          clearTimeout(noOutputTimerId);
        }

        consoleOutput.value = [`[Error]: ${message}`];
      }
    }
  }
  return {
    activeProblem,
    categories,
    consoleOutput,
    displayMode,
    editorCode,
    editorPreset,
    loadSolution,
    toggleSolution,
    resetEditor,
    selectedCategory,
    setDisplayMode,
    selectCategory,
    openProblem,
    runCode,
    updateEditorCode,
  };
});
