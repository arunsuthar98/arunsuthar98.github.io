import { defineConfig } from 'astro/config';

// arunsuthar98.github.io is a USER page → served at the root.
export default defineConfig({
  site: 'https://arunsuthar98.github.io',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
