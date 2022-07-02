<template>
  <container class="product-card" v-if="products.length > 0">
    <h1>Product page</h1>

    <template v-for="(product, index) in products" :key="product.id">
      <product-card :product="product">
        <n-carousel
          :show-arrow="true"
          class="carousel-slider"
          :space-between="20"
          draggable
        >
          <template v-for="img in product.images" :key="img">
            <n-image :alt="product.title" :src="img" height="200" />
          </template>
        </n-carousel>
      </product-card>
    </template>
  </container>

  <container v-else-if="products.length === 0" class="wrong-product-url">
    <h2>Sorry man 😅 we think</h2>
    <h2>You enter to wrong 😩</h2>
    <h2>category page 👀</h2>
    <h3>
      <router-link to="/products/categories"
        >Back to Categories page 😎</router-link
      >
    </h3>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { getCategoryProducts, getProduct } from '@/api';
import ProductCard from '@/components/ProductCard.vue';
import Container from '@/components/Container.vue';
import { NImage, NCarousel } from 'naive-ui';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Product details',
  setup(props) {
    let products = ref([]);

    const categoryName: string = useRoute().params.category;

    onMounted(async () => {
      let { data } = await getCategoryProducts(categoryName);

      console.log(data);
      products.value = data.products;
    });

    return {
      products,
    };
  },
  components: {
    ProductCard,
    Container,
    NImage,
    NCarousel,
  },
});
</script>

<style scoped>
.product-card {
  max-width: 500px;
  margin: auto;
}

.wrong-product-url {
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
}
</style>
