// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { pageTransition: { name: "page", mode: "out-in" } },
  modules: ["@nuxt/image-edge", "@vite-pwa/nuxt"],
  image: {
    provider: "ipx",
    dir: "assets/img",
    screens: {
      sm: 320,
      md: 768,
      lg: 1000,
    },
  },

  pwa: {
    // registerType: "autoUpdate",
    manifest: {
      name: "БАНЯ.РУ",
      short_name: "БАНЯ.РУ",
      description: "Описание",
      theme_color: "#ffffff",
      icons: [
        {
          src: "icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/vars.scss";',
        },
      },
    },
  },
  css: [
    "normalize.css/normalize.css",
    "assets/styles/main.scss",
    "vue-multiselect/dist/vue-multiselect.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["@vuepic/vue-datepicker", "prime"],
  },
  ssr: false,
});
