// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisalmenarez.me',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        // Bare language codes, matching the hreflang tags in Layout.astro.
        // 'es-CO' would target Spanish speakers in Colombia only, which is
        // narrower than intended for a remote-work portfolio.
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
