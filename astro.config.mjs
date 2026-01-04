// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
  // Build optimizations for Astro 5
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Prefetch links for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  
  // Improved dev experience
  devToolbar: {
    enabled: true,
  },
});
