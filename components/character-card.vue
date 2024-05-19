<script setup lang="ts">
import type { Character } from "~/types/character";
defineProps<{ character: Character }>();
const visible = ref(false);
function flipDialog() {
  visible.value = !visible.value;
}
</script>

<template>
  <div
    @click="flipDialog"
    class="card bg-background rounded-md p-4 w-11/12 h-11/12 drop-shadow-lg cursor-pointer hover:bg-accent"
  >
    <h1
      class="text-xl text-center font-semibold mb-2 text-ellipsis overflow-hidden text-nowrap"
    >
      {{ character.name }}
    </h1>
    <div class="grid grid-cols-2">
      <p>Height:</p>
      <p class="place-self-end">{{ character.height }}</p>
      <p>Starred in:</p>
      <p class="place-self-end">{{ character.films.length }}</p>
      <p>Born:</p>
      <p class="place-self-end">{{ character.birth_year }}</p>
    </div>

    <Dialog v-model:visible="visible" modal class="md:w-2/4 w-5/6">
      <template #header>
        <h1
          class="text-xl text-center font-semibold mb-2 text-ellipsis overflow-hidden text-nowrap"
        >
          {{ character.name }}
        </h1>
      </template>
      <div class="grid grid-cols-2">
        <p>Height:</p>
        <p class="place-self-end">{{ character.height }}</p>
        <p>Born:</p>
        <p class="place-self-end">{{ character.birth_year }}</p>
        <p>Starred in:</p>
        <p class="place-self-end">{{ character.films.length }}</p>
        <p>Skin color:</p>
        <p class="place-self-end">{{ character.skin_color }}</p>
        <p>Eye color:</p>
        <p class="place-self-end">{{ character.eye_color }}</p>
      </div>
      <div v-if="character.gender != 'n/a'" class="flex justify-between">
        <p>Gender:</p>
        <p>{{ character.gender }}</p>
      </div>
      <div v-if="character.species.length > 0" class="flex justify-between">
        <p>Species:</p>
        <p v-for="species in character.species">{{ species }}</p>
      </div>
    </Dialog>
  </div>
</template>
