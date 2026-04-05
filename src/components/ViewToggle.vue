<template>
  <div class="c-view-toggle">
    <button
      class="c-view-toggle__button"
      :class="{ 'is-active': modelValue === 'list' }"
      type="button"
      @click="$emit('update:modelValue', 'list')"
    >
      <List :size="16" />
    </button>
    <button
      class="c-view-toggle__button"
      :class="{ 'is-active': modelValue === 'grid' }"
      type="button"
      @click="$emit('update:modelValue', 'grid')"
    >
      <Grid3x3 :size="16" />
    </button>
  </div>
</template>

<script setup>
import { Grid3x3, List } from 'lucide-vue-next';

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>
