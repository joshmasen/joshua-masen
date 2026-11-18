import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/4.x/api/nuxt-config
export default defineNuxtConfig({
  srcDir: ".",
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/fonts"],

  fonts: {
    families: [
      {
        name: "Work Sans",
        provider: "google",
        weights: [400, 600],
        styles: ["normal"],
        global: true,
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>",
        },
      ],
    },
  },

  devtools: { enabled: false },
  devServer: {
    port: 3001,
  },
  compatibilityDate: "2024-08-16",
});
