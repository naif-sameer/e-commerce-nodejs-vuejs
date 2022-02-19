<template>
  <div>
    <h1>404 page 👀</h1>
    <h3>Sorry man 🙈</h3>
    <p>You came to the wrong page 🤣🤣🤣🤣🤣</p>
    <h4>
      <router-link to="/">Back to home 😉</router-link>
    </h4>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '404 page',
});
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}

h1 {
  color: red;
  font-size: clamp(2rem, 10vw, 5rem);
  margin: 0;
}

h3 {
  font-size: clamp(1.5rem, 6vw, 3rem);
  margin: 1rem 0;
}

a {
  font-size: clamp(1rem, 4vw, 2.5rem);
  color: #db2777;
  text-decoration-color: #db2777;
  text-decoration-style: dotted;
}
</style>
