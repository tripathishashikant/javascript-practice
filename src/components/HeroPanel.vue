<template>
  <section class="hero-panel">
    <span class="hero-panel__eyebrow">{{ eyebrow }}</span>
    <h1 class="hero-panel__title">{{ title }}</h1>
    <p
      v-if="copy"
      class="hero-panel__copy"
    >
      {{ copy }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  copy?: string
}>()
</script>
