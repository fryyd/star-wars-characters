<script setup lang="ts">
import { star_wars_api } from "~/constants/api";
import type { Character } from "~/types/character";
const { data } = await useFetch<Character[]>(star_wars_api, {
  transform: (rawData: any) => {
    return rawData.results;
  },
});

const characters = ref([...(data.value ?? [])]);

function filterCharacters(predicate?: (character: Character) => boolean) {
  if (predicate == undefined) {
    characters.value = data.value ?? [];
    return;
  }
  characters.value = data.value?.filter(predicate) ?? [];
}
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center p-10">
    <h1
      class="star-wars-shadow font-black text-wrap w-min text-center md:text-6xl text-2xl drop-shadow-lg select-none"
    >
      STAR WARS CHARACTERS
    </h1>
    <div class="flex m-4 gap-8 flex-col md:flex-row">
      <CustomButton
        :text="'Filter on gender'"
        :onClick="
          () => {
            filterCharacters((character: Character) => character.gender  == 'male' || character.gender  == 'female');
          }
        "
      ></CustomButton>
      <CustomButton
        :text="'Filter on age'"
        :onClick="
          () => {
            filterCharacters((character: Character) => character.birth_year > '20BBY' &&  character.birth_year < '40BBY');
          }
        "
      ></CustomButton>
      <CustomButton
        :text="'Reset filter'"
        :onClick="
          () => {
            filterCharacters();
          }
        "
      ></CustomButton>
    </div>
    <div
      class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 bg-background"
    >
      <div v-for="character in characters">
        <CharacterCard :character="character"></CharacterCard>
      </div>
    </div>
  </div>
</template>

<style>
.star-wars-shadow {
  text-shadow: 2px 0px 4px rgba(246, 255, 0, 0.75),
    -2px 0px 4px rgba(246, 255, 0, 0.75), 0px 2px 4px rgba(246, 255, 0, 0.75),
    0px -2px 4px rgba(246, 255, 0, 0.75);
}
</style>
