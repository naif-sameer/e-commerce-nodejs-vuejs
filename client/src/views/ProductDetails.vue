<template>
  <container class="product-card" v-if="product.id">
    <h1>Product page</h1>

 
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
  </container>

  <container v-else class="wrong-product-url">
    <h2>Sorry man 😅 we think</h2>
    <h2>You enter to wrong 😩</h2>
    <h2>product details page 👀</h2>
    <h3>
      <router-link to="/products">Back to products page 😎</router-link>
    </h3>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { getProduct } from '@/api';
import ProductCard from '@/components/ProductCard.vue';
import Container from '@/components/Container.vue';
import { NImage, NCarousel } from 'naive-ui';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Product details',
  setup(props) {
    let product = ref({});  

    const productID: number = Number(useRoute().params.id);

    onMounted(async () => {
      let { data } = await getProduct(productID);

      console.log(data)
      product.value = data;
    });

    return {
      product,
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
