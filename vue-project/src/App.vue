<template>
  <div>
    <PokemonGame />
    <PokemonPicture />
  </div>
</template>

<script setup lang="ts">
import PokemonPicture from './modules/pokemon/components/PokemonPicture.vue';
import PokemonGame from './modules/pokemon/views/PokemonGame.vue';
import './assets/main.css'
import { usePokemonGame } from './modules/composables/usePokemonGame';
const {gameStatus} = usePokemonGame();
</script>

<style scoped>

</style>