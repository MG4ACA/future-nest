// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-gtag'],
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  css: ['~/assets/css/main.css'],
});
