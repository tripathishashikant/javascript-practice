<template>
  <nav class="c-nav" :class="variantClass" aria-label="Primary navigation">
    <RouterLink class="c-nav__link" :to="{ name: 'concept' }" active-class="is-active"
      >Concept</RouterLink
    >

    <a
      class="c-nav__icon-link"
      href="https://github.com/tripathishashikant/practice-javascript"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <Github :size="16" />
    </a>

    <a
      class="c-nav__icon-link"
      href="https://www.linkedin.com"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <Linkedin :size="16" />
    </a>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { Github, Linkedin } from 'lucide-vue-next';

const props = defineProps({
  variant: {
    type: String,
    default: 'header',
  },
});

const variantClass = computed(() => `c-nav--${props.variant}`);
</script>
