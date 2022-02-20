<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  padding: 0;
  margin: 0;
  font-family: 'seguiemj', 'Courier New', Courier, monospace;
}

@font-face {
  font-family: 'seguiemj';
  src: local('Merienda'), url('@/assets/fonts/seguiemj.ttf') format('truetype');
}

img {
  max-width: 100%;
}
</style>
