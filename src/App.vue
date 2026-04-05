<template>
  <div class="l-app-shell">
    <AppHeader />

    <main class="l-app-shell__main">
      <HomeView v-if="store.activeView === 'home'" />
      <ConceptView v-else-if="store.activeView === 'concept'" />
      <ProblemView v-else />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import { useProblemStore } from '@/stores/problemStore'
import ConceptView from '@/views/ConceptView.vue'
import HomeView from '@/views/HomeView.vue'
import ProblemView from '@/views/ProblemView.vue'

const store = useProblemStore()
</script>
