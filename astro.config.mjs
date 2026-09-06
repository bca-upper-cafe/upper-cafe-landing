import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.bcaupper.cafe',
  integrations: [tailwind()],
});
