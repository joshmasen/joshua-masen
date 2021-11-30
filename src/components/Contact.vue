<template>
  <section class="contact">
    <Button href="mailto:joshuamasen7@gmail.com">
      Wanna chat about your project? Send me an email!
    </Button>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.contact {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}
</style>
