// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
      title: 'Best selling travel products | Away: Built for modern travel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Best selling travel products | Away: Built for modern travel' },
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
})
