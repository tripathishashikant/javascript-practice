<template>
  <button class="c-home-card" type="button" @click="$emit('select')">
    <div v-if="$slots.leading" class="c-home-card__heading c-home-card__heading--with-leading">
      <span class="c-home-card__leading">
        <slot name="leading" />
      </span>
      <span class="c-home-card__title">{{ title }}</span>
    </div>

    <span v-else class="c-home-card__title">
      {{ title }}
    </span>

    <span class="c-home-card__copy">{{ copy }}</span>
  </button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  copy: {
    type: String,
    required: true,
  },
});

defineEmits(['select']);
</script>
