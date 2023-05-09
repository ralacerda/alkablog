// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "description",
          content: "AlkaBlog is a example website showing the use of Nuxt",
        },
      ],
    },
  },
  modules: ["unplugin-icons/nuxt"],
});
