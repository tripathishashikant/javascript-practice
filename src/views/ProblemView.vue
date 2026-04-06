<template>
  <section v-if="problem" class="m-problem-workspace">
    <header class="m-problem-workspace__header">
      <div>
        <p class="m-problem-workspace__eyebrow">{{ problem.categoryId }}</p>
        <h1 class="m-problem-workspace__title">{{ problem.title }}</h1>
        <p class="m-problem-workspace__summary">{{ problem.summary }}</p>
      </div>

      <div class="m-problem-workspace__actions">
        <RouterLink
          class="m-problem-workspace__back"
          :to="{ name: 'concept', params: { categoryId: problem.categoryId } }"
        >
          <ArrowLeft :size="16" />
          <span>Return to Concept</span>
        </RouterLink>

        <button
          class="m-problem-workspace__toggle"
          type="button"
          :aria-label="isExplanationVisible ? 'Hide explanation' : 'Show explanation'"
          @click="isExplanationVisible = !isExplanationVisible"
        >
          <EyeOff v-if="isExplanationVisible" :size="16" />
          <Eye v-else :size="16" />
        </button>
      </div>
    </header>

    <div class="m-problem-workspace__grid">
      <section v-if="isExplanationVisible" class="m-problem-workspace__panel">
        <h2>Explanation</h2>
        <p>{{ problem.description }}</p>

        <div class="m-problem-workspace__stream">
          <h3>Examples</h3>
          <div
            v-for="example in problem.examples"
            :key="example.input"
            class="m-problem-workspace__stream-item"
          >
            <p>Input: {{ example.input }}</p>
            <p>Output: {{ example.output }}</p>
          </div>
        </div>

        <div class="m-problem-workspace__stream">
          <h3>Constraints</h3>
          <p
            v-for="constraint in problem.constraints"
            :key="constraint"
            class="m-problem-workspace__constraint"
          >
            {{ constraint }}
          </p>
        </div>
      </section>

      <section class="m-problem-workspace__panel">
        <div class="m-problem-workspace__panel-heading">
          <h2>Workspace</h2>
          <span>Monaco Editor</span>
        </div>

        <MonacoEditor
          :model-value="store.editorCode"
          @update:model-value="store.updateEditorCode"
        />

        <div class="m-problem-workspace__console">
          <div class="m-problem-workspace__console-header">
            <h3>Execution Console</h3>
            <button class="m-problem-workspace__run" type="button" @click="store.runCode">
              RUN CODE
            </button>
          </div>

          <div class="m-problem-workspace__console-output">
            <p v-for="line in store.consoleOutput" :key="line">
              {{ line }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { onBeforeRouteLeave, RouterLink, useRoute } from 'vue-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-vue-next';
import MonacoEditor from '@/components/MonacoEditor.vue';
import { useHead } from '@/composables/useHead';
import { useProblemStore } from '@/stores/problemStore';

const store = useProblemStore();
const route = useRoute();
const problem = computed(() => store.activeProblem);
const isExplanationVisible = ref(true);

watchEffect(() => {
  const problemId = typeof route.params.problemId === 'string' ? route.params.problemId : '';

  if (!problemId) {
    return;
  }

  if (problemId !== store.activeProblem?.id) {
    store.openProblem(problemId);
  }
});

onBeforeRouteLeave((_to, _from, next) => {
  store.resetEditor();
  next();
});

useHead(() => ({
  title: problem.value ? `Practice ${problem.value.title} - JS LAB` : 'Problem - JS LAB',
  meta: [
    {
      name: 'description',
      content: problem.value?.summary ?? 'Practice JavaScript problems in JS LAB.',
    },
  ],
}));
</script>
