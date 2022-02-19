<template>
  <container>
    <header>
        <router-link to="/products">Products</router-link>
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
