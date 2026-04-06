<template>
  <div class="exercise-view" v-if="exercise">
    <h2>{{ exercise.name }}</h2>
    <p>{{ exercise.description }}</p>

    <div class="playground">
      <div class="problem-statement">
        <h3>Problem</h3>
        <!-- In a real app, you might want a safer way to render HTML -->
        <div v-html="exercise.problem"></div>
      </div>
      <div class="code-editor-area">
        <h3>Your Code</h3>
        <textarea v-model="userCode" rows="10" style="width: 100%"></textarea>
      </div>
      <div class="output-area">
        <button @click="runCode">Run Code</button>
        <h3>Output</h3>
        <pre>{{ output }}</pre>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Exercise not found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { topics, Exercise } from '../data/exercises';

const route = useRoute();
const userCode = ref('');
const output = ref('');

const exercise = computed<Exercise | undefined>(() => {
  const topicId = route.params.topic as string;
  const exerciseId = route.params.exercise as string;
  const topic = topics.find((t) => t.id === topicId);
  return topic?.exercises.find((e) => e.id === exerciseId);
});

function setStarterCode() {
  if (exercise.value) {
    userCode.value = exercise.value.starterCode || '// Start your code here';
    output.value = '';
  }
}

onMounted(setStarterCode);
watch(() => route.params, setStarterCode);

function runCode() {
  // WARNING: Using eval() is a security risk and not suitable for production.
  // This should be replaced with a secure sandboxed execution environment.
  try {
    // eslint-disable-next-line no-eval
    const result = eval(`(function() { ${userCode.value} })()`);
    output.value = JSON.stringify(result, null, 2);
  } catch (error) {
    output.value = error instanceof Error ? error.stack || error.message : String(error);
  }
}
</script>
