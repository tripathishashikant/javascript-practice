<template>
  <header class="c-header">
    <RouterLink class="c-header__brand" :to="{ name: 'home' }">JavaScriptLAB</RouterLink>

    <nav class="c-header__nav">
      <RouterLink class="c-header__link" :to="{ name: 'home' }" exact-active-class="is-active">
        Problems
      </RouterLink>
      <RouterLink class="c-header__link" :to="{ name: 'concept' }" active-class="is-active">
        Concept
      </RouterLink>
      <a
        class="c-header__link"
        href="https://github.com/tripathishashikant/practice-javascript"
        target="_blank"
        rel="noreferrer"
      >
        <Github :size="16" />
        <span>GitHub</span>
      </a>
      <a class="c-header__link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <Linkedin :size="16" />
        <span>LinkedIn</span>
      </a>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { Github, Linkedin } from 'lucide-vue-next';
</script>
