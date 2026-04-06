<template>
  <footer class="c-footer">
    <div class="c-footer__group">
      <RouterLink class="c-footer__link" :to="{ name: 'home' }">Problems</RouterLink>
      <RouterLink class="c-footer__link" :to="{ name: 'concept' }">Concept</RouterLink>
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
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>
