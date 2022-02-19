import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// vueJsx()

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3080,
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
});
