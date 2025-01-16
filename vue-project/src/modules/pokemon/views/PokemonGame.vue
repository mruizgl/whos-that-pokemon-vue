<template>
    <div>
      <button @click="toggleVisibility">
        {{ isVisible ? 'Ocultar' : 'Mostrar' }}
      </button>
  
      <p v-show="isVisible">¡Hola! Soy un elemento visible.</p>
    </div>
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
  