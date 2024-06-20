/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        "base-light": "var(--base-light)",
        background: "var(--bg)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
      },
      dropShadow: {
        square: "4px 4px 0 0 var(--base)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
