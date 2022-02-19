<template>
  <div class="container">
    <slot> </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
});
</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 2rem);
  margin: auto;
}
</style>
