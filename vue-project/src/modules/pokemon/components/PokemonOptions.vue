<template>
    <section class="mt-5 flex flex-col">
        <button 
            v-for="{ name, id } in options" 
            :key="id" 
            class="capitalize"
            @click="$emit('selectedOption', id)"
        >
            {{ name }}
        </button>
    </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon.interface';

defineProps<{ options: Pokemon[] }>();


defineEmits<{
  (event: 'selectedOption', id: number): void;
}>();

</script>

<style scoped>
button {
    @apply bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}
</style>
