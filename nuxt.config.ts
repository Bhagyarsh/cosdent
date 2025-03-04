// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/icon', '@nuxt/ui'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/', // Replace <REPO_NAME> with your GitHub repo name
  },

    css: ['~/assets/font/flaticon_mycollection.css', '~/assets/css/app.css']

})