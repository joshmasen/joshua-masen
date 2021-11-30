<template>
  <div class="contact">
    <Button href="mailto:joshuamasen7@gmail.com"
      >Want to chat about your project? Email&nbsp;me!</Button
    >
  </div>
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
  margin-bottom: 4rem;
}
</style>
