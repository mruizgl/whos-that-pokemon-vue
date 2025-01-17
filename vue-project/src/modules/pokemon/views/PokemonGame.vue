<template>
    <div>
      <button @click="toggleVisibility">
        {{ isVisible ? 'Ocultar' : 'Mostrar' }}
      </button>
  
      <p v-show="isVisible">¡Hola! Soy un elemento visible.</p>
    </div>

    <section class="flex flex-col justify-center items-center w-screen h-screen">
      <h1>¿Quién es este Pokémon?</h1>
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
  button {
    margin-bottom: 10px;
  }
  </style>
  