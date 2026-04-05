import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { categories } from '@/data/exercises';
function formatConsoleValue(value) {
    if (typeof value === 'string') {
        return value;
    }
    try {
        return JSON.stringify(value);
    }
    catch {
        return String(value);
    }
}
export const useProblemStore = defineStore('problemStore', () => {
    const activeView = ref('home');
    const displayMode = ref('list');
    const selectedCategoryId = ref(categories[0]?.id ?? '');
    const activeProblemId = ref(categories[0]?.problems[0]?.id ?? '');
    const editorCode = ref(categories[0]?.problems[0]?.starterCode ?? '');
    const consoleOutput = ref([
        'Console ready.',
        '[Log]: Select a problem and run the current solution.',
    ]);
    const allProblems = computed(() => categories.flatMap((category) => category.problems));
    const selectedCategory = computed(() => categories.find((category) => category.id === selectedCategoryId.value));
    const activeProblem = computed(() => allProblems.value.find((problem) => problem.id === activeProblemId.value));
    function resetEditor(problem = activeProblem.value) {
        editorCode.value = problem?.starterCode ?? '';
        consoleOutput.value = [
            'Console ready.',
            '[Log]: Session-only editor state restored to starter code.',
        ];
    }
    function setActiveView(view) {
        if (view !== 'problem') {
            resetEditor();
        }
        activeView.value = view;
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
        activeView.value = 'concept';
    }
    function openProblem(problemId) {
        const problem = allProblems.value.find((item) => item.id === problemId);
        if (!problem) {
            return;
        }
        selectedCategoryId.value = problem.categoryId;
        activeProblemId.value = problemId;
        activeView.value = 'problem';
        resetEditor(problem);
    }
    function updateEditorCode(nextValue) {
        editorCode.value = nextValue;
    }
    async function runCode() {
        const logs = [];
        const virtualConsole = {
            log: (...args) => {
                logs.push(args.map(formatConsoleValue).join(' '));
            },
        };
        try {
            const runner = new Function('console', `"use strict";\nreturn (async () => {\n${editorCode.value}\n})();`);
            await runner(virtualConsole);
            consoleOutput.value = logs.length
                ? logs
                : ['[Log]: Execution completed with no console output.'];
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            consoleOutput.value = [`[Error]: ${message}`];
        }
    }
    return {
        activeView,
        activeProblem,
        categories,
        consoleOutput,
        displayMode,
        editorCode,
        selectedCategory,
        setActiveView,
        setDisplayMode,
        selectCategory,
        openProblem,
        runCode,
        updateEditorCode,
    };
});
