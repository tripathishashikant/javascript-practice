<template>
  <div class="home-view">
    <h2>Practice Topics</h2>
    <div v-for="topic in topics" :key="topic.id" class="topic-section">
      <h3>{{ topic.name }}</h3>
      <ul>
        <li v-for="exercise in topic.exercises" :key="exercise.id">
          <router-link
            :to="{ name: 'Exercise', params: { topic: topic.id, exercise: exercise.id } }"
          >
            {{ exercise.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { topics as exerciseTopics } from '../data/exercises';

const topics = ref(exerciseTopics);
</script>

<style lang="scss" scoped>
.topic-section {
  margin-bottom: 2rem;
}
</style>
