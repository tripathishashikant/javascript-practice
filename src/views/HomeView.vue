<template>
  <section class="m-home">
    <header class="m-home__hero">
      <p class="m-home__eyebrow">Quantum Blue Terminal</p>
      <h1 class="m-home__title">JS LAB</h1>
      <p class="m-home__intro">
        Monospaced JavaScript drills with zero decorative noise, direct problem statements, and a
        session-only execution workspace.
      </p>
    </header>

    <div class="m-home__duo">
      <section class="m-home__panel">
        <div class="m-home__panel-header">
          <h2>Features</h2>
          <p>Problem summaries are exposed as raw text streams for immediate scanning.</p>
        </div>

        <div class="m-home__feature-list">
          <InteractiveCard
            v-for="problem in featuredProblems"
            :key="problem.id"
            :title="problem.title"
            :copy="problem.summary"
            @select="openProblem(problem.id)"
          >
          </InteractiveCard>
        </div>
      </section>

      <section class="m-home__panel">
        <div class="m-home__panel-header">
          <h2>Categories</h2>
          <p>Geometric tokens replace decorative badges and keep difficulty legible.</p>
        </div>

        <div class="m-home__category-list">
          <InteractiveCard
            v-for="category in store.categories"
            :key="category.id"
            :title="category.title"
            :copy="category.description"
            @select="openCategory(category.id)"
          >
            <template #leading>
              <DifficultyToken :level="category.difficulty" />
            </template>
          </InteractiveCard>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import DifficultyToken from '@/components/DifficultyToken.vue';
import InteractiveCard from '@/components/InteractiveCard.vue';
import { useHead } from '@/composables/useHead';
import { featuredProblems } from '@/data/exercises';
import { useProblemStore } from '@/stores/problemStore';

const store = useProblemStore();
const router = useRouter();

function openProblem(problemId) {
  store.openProblem(problemId);
  router.push({ name: 'problem', params: { problemId } });
}

function openCategory(categoryId) {
  store.selectCategory(categoryId);
  router.push({ name: 'concept', params: { categoryId } });
}

useHead({
  title: 'JS LAB',
  meta: [
    {
      name: 'description',
      content: 'Practice JavaScript with a minimalist Quantum Blue Terminal interface.',
    },
  ],
});
</script>
