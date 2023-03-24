// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        {
          name: "description",
          content:
            "O Alkablog é o resultado de um teste técnico de um processo seletivo. ",
        },
      ],
    },
  },
  modules: ["unplugin-icons/nuxt"],
});
