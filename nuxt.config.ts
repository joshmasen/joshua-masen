// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // My Netlify build was running out of memory in the Netlify Functions build step
  // and adding this section, suggested in the Netlify forums, fixed the issue:
  // https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/13
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
  ignore: process.env.NODE_ENV === "production" ? ["pages/blog/**"] : [],
});
