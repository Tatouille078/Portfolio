import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Point to postcss.config.js (ensure it's in the root folder)
  },
});