<template>
  <div>Products page</div>

  <!-- {{products}} -->
  <template v-for="item in products" :key="item.id">
    <n-card>
      <h4>
        <router-link :to="'/products/' + item.id">
          {{ item.title }}
        </router-link>
      </h4>

      <p>
        {{ item.description }}
      </p>
    </n-card>
  </template>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { NCard } from 'naive-ui';
import { getProducts } from '@/api';
export default defineComponent({
  name: 'Products',
  setup(props) {
    let arr = ref([]);

    onMounted(async () => {
      let { data } = await getProducts();

      arr.value.push(...data.products);
    });

    console.log(arr);
    return {
      products: arr,
    };
  },
  components: {
    NCard,
  },
});
</script>

<style></style>
