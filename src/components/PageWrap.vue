<template>
  <html lang="en">
    <Head />
    <body>
      <Notice />
      <!-- <Toggle /> -->

      <slot />

      <Contact />

      <Footer />
    </body>
  </html>
</template>

<script>
import Contact from "./Contact.vue";
import Head from "./Head.vue";
import Notice from "./Notice.vue";
// import Toggle from "./Toggle.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Contact,
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
