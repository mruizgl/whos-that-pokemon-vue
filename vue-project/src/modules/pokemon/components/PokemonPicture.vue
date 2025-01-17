<template>
    <div>
        <section class="flex flex-col justify-center items-center w-screen h-screen">
            <h1 class="text-1xl" >¿Quién es este Pokémon?</h1>
            <img class="brightness-0 h-[200px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg">
            <button>Opción 1</button>
            <button>Opción 2</button>
            <button>Opción 3</button>
            <button>Opción 4</button>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

button {
    @apply bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}

@tailwind utilities;

</style>