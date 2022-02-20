<template>
  <container>
    <h1>Products page</h1>

    <n-grid cols="1 576:2 768:3 992:4" :x-gap="6" :y-gap="6">
      <template v-for="product in products" :key="product.id">
        <n-grid-item>
          <product-card :product="product" />
        </n-grid-item>
      </template>
    </n-grid>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { getProducts } from '@/api';
import ProductCard from '@/components/ProductCard.vue';
import Container from '@/components/Container.vue';
import { NGrid, NGridItem } from 'naive-ui';

export default defineComponent({
  name: 'Products',
  setup(props) {
    let arr = ref<Object[]>([]);

    onMounted(async () => {
      let { data } = await getProducts();

      arr.value.push(...data.products);
    });

    return {
      products: arr,
    };
  },
  components: {
    ProductCard,
    Container,
    NGrid,
    NGridItem,
  },
});
</script>

<style></style>
