<template>
  <container>
    <header>
      <h2>
        <router-link to="/products">Products</router-link>
      </h2>
      <h2>
        <router-link to="/products/categories">Categories</router-link>
      </h2>
    </header>
    Home page
  </container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NLayout, NMenu, NBreadcrumb, NBreadcrumbItem } from 'naive-ui';
import Container from '@/components/Container.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NMenu,
    NLayout,
    NBreadcrumb,
    NBreadcrumbItem,
    Container,
  },
});
</script>

<style></style>
