// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: { usePrimeVue: true, options: { unstyled: false } },
  css: ["primevue/resources/themes/aura-light-noir/theme.css"],
});
