<template>
  <html lang="en">
    <Head />
    <body>
      <Notice />
      <!-- <Toggle /> -->

      <slot />

      <Footer />
    </body>
  </html>
</template>

<script>
import Head from "./Head.vue";
import Notice from "./Notice.vue";
// import Toggle from "./Toggle.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Head,
    // Toggle,
    Footer,
    Notice,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
