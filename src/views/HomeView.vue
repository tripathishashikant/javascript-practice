<template>
  <div class="app-shell">
    <header class="app-shell__header">
      <HeroPanel
        eyebrow="JavaScript Lab"
        title="Practice JavaScript"
        copy="Vue 3 + TypeScript scaffold"
      />
    </header>

    <div class="app-shell__body panel-grid">
      <SectionCard
        title="Topics"
      >
        <TopicList :exercises="exercises" />
      </SectionCard>

      <SectionCard
        title="Status"
      >
        <p>Scaffold ready.</p>
      </SectionCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroPanel from '../components/HeroPanel.vue'
import SectionCard from '../components/SectionCard.vue'
import TopicList from '../components/TopicList.vue'
import { exercises } from '../data/exercises'
</script>
