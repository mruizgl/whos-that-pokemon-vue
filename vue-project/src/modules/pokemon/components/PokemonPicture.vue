<template>
    <div>
        <section class="flex flex-col justify-center items-center w-screen h-screen">
            <h1 class="text-1xl">¿Quién es este Pokémon?</h1>
            <img 
                v-if="!showPokemon"
                :src="pokemonImage"
                class="brightness-0 h-[200px]" 
            />
            <img 
                v-else
                :src="pokemonImage"
                class="h-[200px]"
                :class="{ 'fade-in': showPokemon }"
                alt="pokemon image"
            />
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    pokemonId: number;
    showPokemon: boolean;
}

const props = defineProps<Props>();

const pokemonImage = computed(() => 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
);
</script>

<style scoped>
button {
    @apply bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}

</style>
