<template>
  <footer class="c-footer">
    <div class="c-footer__group">
      <PrimaryNav variant="footer" />
    </div>

    <p class="c-footer__copyright">&copy; {{ currentYear }} JS LAB.</p>

    <div class="c-footer__group">
      <a
        class="c-footer__link"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        <BookOpen :size="16" />
        MDN Web Docs
      </a>
      <a class="c-footer__link" href="https://javascript.info" target="_blank" rel="noreferrer">
        <Code :size="16" />
        JavaScript.info
      </a>
    </div>
  </footer>
</template>

<script setup>
import PrimaryNav from '@/components/PrimaryNav.vue';
import { BookOpen, Code } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>
