import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify()
});
import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ['devserver-preview--kallevxaffiliate.netlify.app']
    }
  }
})
