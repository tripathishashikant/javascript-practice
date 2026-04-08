<template>
  <RouterLink class="c-logo" :to="{ name: 'home' }" aria-label="JS LAB Home">
    <span class="c-logo__base">JavaScript</span><span class="c-logo__accent">LAB</span>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
