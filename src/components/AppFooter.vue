<template>
  <footer class="c-footer">
    <div class="c-footer__group">
      <button class="c-footer__link" type="button" @click="store.setActiveView('home')">
        Problems
      </button>
      <button class="c-footer__link" type="button" @click="store.setActiveView('concept')">
        Concept
      </button>
      <a
        class="c-footer__link"
        href="https://github.com/tripathishashikant/practice-javascript"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a class="c-footer__link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </div>

    <p class="c-footer__copyright">&copy; {{ currentYear }} JS LAB.</p>

    <div class="c-footer__group">
      <a
        class="c-footer__link"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        MDN Web Docs
      </a>
      <a class="c-footer__link" href="https://javascript.info" target="_blank" rel="noreferrer">
        JavaScript.info
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useProblemStore } from '@/stores/problemStore';

const store = useProblemStore();
const currentYear = new Date().getFullYear();
</script>
