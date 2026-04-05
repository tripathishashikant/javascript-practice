<template>
  <section class="m-concept">
    <header class="m-concept__header">
      <p class="m-concept__eyebrow">Concept Index</p>
      <h1 class="m-concept__title">{{ store.selectedCategory?.title ?? 'Concept Page' }}</h1>
      <p class="m-concept__copy">
        {{ store.selectedCategory?.description ?? 'Whitespace-first concept navigation.' }}
      </p>
    </header>

    <div class="m-concept__toggle">
      <ViewToggle :model-value="store.displayMode" @update:model-value="store.setDisplayMode" />
    </div>

    <div class="m-concept__list" :class="{ 'is-grid': store.displayMode === 'grid' }">
      <button
        v-for="problem in problems"
        :key="problem.id"
        class="m-concept__item"
        type="button"
        @click="store.openProblem(problem.id)"
      >
        <div class="m-concept__item-top">
          <div class="m-concept__item-title">
            <DifficultyToken :level="problem.difficulty" />
            <h2>{{ problem.title }}</h2>
          </div>
          <span class="m-concept__item-level">{{ problem.difficulty }}</span>
        </div>
        <p class="m-concept__item-copy">{{ problem.summary }}</p>
        <p class="m-concept__item-concept">{{ problem.concept }}</p>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import DifficultyToken from '@/components/DifficultyToken.vue';
import ViewToggle from '@/components/ViewToggle.vue';
import { useHead } from '@/composables/useHead';
import { useProblemStore } from '@/stores/problemStore';

const store = useProblemStore();

const problems = computed(() => store.selectedCategory?.problems ?? []);

useHead({
  title: 'Concepts - JS LAB',
  meta: [
    {
      name: 'description',
      content: 'Browse JavaScript concepts with clean list and grid modes.',
    },
  ],
});
</script>
