<template>
  <ul class="topic-list">
    <li v-for="exercise in exercises" :key="exercise.id" class="topic-list__item">
      <p class="topic-list__meta">{{ exercise.category }}</p>
      <p class="topic-list__title">{{ exercise.title }}</p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  exercises: {
    type: Array,
    required: true,
  },
});
</script>
