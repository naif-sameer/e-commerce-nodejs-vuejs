<template>
  <n-card size="small" v-if="product">
    <n-image
      class="card-img"
      object-fit="cover"
      :src="product.thumbnail"
      :alt="product.title"
    />

    <div class="card-header">
      <h5>
        <router-link :to="'/products/' + product.id">
          {{ product.title }}
        </router-link>
      </h5>
      <span class="card-price"> {{ product.price }}$ </span>

      <n-tag> {{ product.brand }}</n-tag>
    </div>

    <p>
      {{ product.description }}
    </p>
  </n-card>
</template>

<script lang="ts">
import { NCard, NImage, NTag } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Product Card',
  components: {
    NCard,
    NImage,
    NTag,
  },
  props: {
    product: Object,
  },
});
</script>

<style>
.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-price {
  color: red;
}

.card-img {
  display: flex;
  justify-content: center;
}

.card-img img {
  max-height: 250px;
}
</style>
