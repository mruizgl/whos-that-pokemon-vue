<template>
  <section class="flex flex-col justify-center items-center w-screen h-screen">
      <h1 v-show="isVisible" class="text-3xl" >Espere por favor</h1>
      <h3 v-show="isVisible" class="animate-pulse">Cargando Pokémons</h3>
      <button @click="toggleVisibility">
        {{ isVisible ? 'Ocultar' : 'Mostrar' }}
      </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true, 
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>

</style>