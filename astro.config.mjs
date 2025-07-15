import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ['devserver-preview--kallevxaffiliate.netlify.app']
    }
  }
})
