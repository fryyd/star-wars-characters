<script setup lang="ts">
const props = defineProps<{
  text: string;
  onClick: void;
}>();
</script>

<template>
  <button
    class="rounded-md p-2 bg-secondary hover:bg-accent active:bg-primary"
    @click="props.onClick"
  >
    {{ props.text }}
  </button>
</template>
