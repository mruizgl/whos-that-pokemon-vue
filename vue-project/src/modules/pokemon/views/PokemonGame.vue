<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quién es este Pokémon?</h1>
    <PokemonPicture :pokemon-id="randomPokemon.id" 
                    :show-pokemon="showPokemon" 
                    class="m-2"/>
    <PokemonOptions :options="options" 
                    :blockSelection="false"
                    @selected-option="onSelectedOption" 
                    class="m-2"/>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokemonGame } from '@/modules/composables/usePokemonGame';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { GameStatus } from '../interfaces';
import confetti from 'canvas-confetti';

const { randomPokemon, isLoading, pokemonOptions: options } = usePokemonGame();
const gameStatus = ref<GameStatus>(GameStatus.Playing);

const showPokemon = ref(false);


const onSelectedOption = (selectedId: number) => {
  console.log({ selectedId });

  if (selectedId === randomPokemon.value.id) {
    gameStatus.value = GameStatus.Won;
    showPokemon.value = true;
    confetti({
        particleCount: 300,
        spread: 150,
        origin: {
          y: 0.6
        }
      });
  }else {
    gameStatus.value = GameStatus.Lost;
  }
};
</script>

<style scoped>
.m-2 {
  margin: 0.5rem;
}
</style>
