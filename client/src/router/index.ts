import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';

// const { TITLE } = import.meta.env;

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

export default router;
