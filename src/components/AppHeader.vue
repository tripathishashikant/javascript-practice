<template>
  <header class="c-header">
    <button class="c-header__brand" type="button" @click="store.setActiveView('home')">
      JavaScriptLAB
    </button>

    <nav class="c-header__nav">
      <button
        class="c-header__link"
        :class="{ 'is-active': store.activeView === 'home' }"
        type="button"
        @click="store.setActiveView('home')"
      >
        Problems
      </button>
      <button
        class="c-header__link"
        :class="{ 'is-active': store.activeView === 'concept' }"
        type="button"
        @click="store.setActiveView('concept')"
      >
        Concept
      </button>
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
import { Github, Linkedin } from 'lucide-vue-next';
import { useProblemStore } from '@/stores/problemStore';

const store = useProblemStore();
</script>
