<template>
  <component
    :is="icon"
    class="c-difficulty-token"
    :class="`is-${level}`"
    :size="16"
    :stroke-width="1.75"
  />
</template>

<script setup>
import { computed } from 'vue'
import { Circle, Pentagon, Triangle } from 'lucide-vue-next'

const props = defineProps({
  level: {
    type: String,
    required: true,
  },
})

const icon = computed(() => {
  if (props.level === 'easy') {
    return Circle
  }

  if (props.level === 'hard') {
    return Pentagon
  }

  return Triangle
})
</script>
