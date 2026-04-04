<template>
  <ul class="topic-list">
    <li
      v-for="exercise in exercises"
      :key="exercise.id"
      class="topic-list__item"
    >
      <p class="topic-list__meta">{{ exercise.category }}</p>
      <p class="topic-list__title">{{ exercise.title }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ExerciseSummary } from '../types/exercise'

defineProps<{
  exercises: ExerciseSummary[]
}>()
</script>
