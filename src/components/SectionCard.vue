<template>
  <section class="section-card">
    <header class="section-card__header">
      <h2 class="section-card__title">{{ title }}</h2>
      <p
        v-if="copy"
        class="section-card__copy"
      >
        {{ copy }}
      </p>
    </header>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  copy?: string
}>()
</script>
