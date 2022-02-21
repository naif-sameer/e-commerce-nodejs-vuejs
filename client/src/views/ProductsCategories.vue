<template>
  <container class="product-card">
    <h1>Categories page</h1>

    <n-space size="small">
      <template v-for="(category, index) in categories" :key="index">
        <n-card>
          <h3>
            <router-link :to="'/products/category/' + category">
              {{ category }}
            </router-link>
          </h3>
        </n-card>
      </template>
    </n-space>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getCategories } from '@/api';
import ProductCard from '@/components/ProductCard.vue';
import Container from '@/components/Container.vue';
import { NCard, NSpace } from 'naive-ui';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Categories',
  setup(props) {
    let categories = ref([]);

    onMounted(async () => {
      let { data } = await getCategories();

      console.log(data);
      categories.value.push(...data);
    });

    return {
      categories,
    };
  },
  components: {
    ProductCard,
    Container,
    NCard,
    NSpace,
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
