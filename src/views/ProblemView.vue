<template>
  <section
    v-if="problem"
    class="m-problem-workspace"
  >
    <header class="m-problem-workspace__header">
      <div>
        <p class="m-problem-workspace__eyebrow">{{ problem.categoryId }}</p>
        <h1 class="m-problem-workspace__title">{{ problem.title }}</h1>
        <p class="m-problem-workspace__summary">{{ problem.summary }}</p>
      </div>

      <button
        class="m-problem-workspace__back"
        type="button"
        @click="store.setActiveView('concept')"
      >
        Return to Concept
      </button>
    </header>

    <div class="m-problem-workspace__grid">
      <section class="m-problem-workspace__panel">
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
            <button
              class="m-problem-workspace__run"
              type="button"
              @click="store.runCode"
            >
              RUN CODE
            </button>
          </div>

          <div class="m-problem-workspace__console-output">
            <p
              v-for="line in store.consoleOutput"
              :key="line"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import MonacoEditor from '@/components/MonacoEditor.vue'
import { useHead } from '@/composables/useHead'
import { useProblemStore } from '@/stores/problemStore'

const store = useProblemStore()
const problem = computed(() => store.activeProblem)

useHead(() => ({
  title: problem.value ? `Practice ${problem.value.title} - JS LAB` : 'Problem - JS LAB',
  meta: [
    {
      name: 'description',
      content: problem.value?.summary ?? 'Practice JavaScript problems in JS LAB.',
    },
  ],
}))
</script>
