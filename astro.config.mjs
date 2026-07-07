// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domain unconfirmed — placeholder for sitemap/canonical URL generation.
  // Confirm with the client before launch and update here.
  site: 'https://augova.com',

  // Static build; the lead-form endpoint runs as a Cloudflare Pages
  // Function in /functions/ (added in a later milestone) and coexists
  // with the static Astro output — no SSR adapter required.
  output: 'static',

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});