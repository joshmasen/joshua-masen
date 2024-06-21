// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // css: ["~/assets/css/tailwind.css"],
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@nuxt/image",
  ],
  content: {},
  googleFonts: {
    families: {
      "Work Sans": [400, 600],
    },
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
});
