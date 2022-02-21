import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: 'Products',
    path: '/products',
    component: () => import('@/views/Products.vue'),
  },

  {
    name: 'Products details',
    path: '/products/:id',
    component: () => import('@/views/ProductDetails.vue'),
  },
  {
    name: 'Products details',
    path: '/products/categories',
    component: () => import('@/views/ProductsCategories.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
