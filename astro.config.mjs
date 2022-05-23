// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
export default defineConfig({
  // Enable the Vue integration to support Vue components.
  integrations: [vue()],
});
