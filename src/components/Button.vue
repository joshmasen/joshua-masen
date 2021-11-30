<template>
  <a :href="href" target="_blank" class="button"><slot /></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.button {
  text-decoration: none;
  color: #000;
  background: hsl(0, 0%, 100%);
  border: 2px solid #000;
  padding: 1.5rem 3rem;
  transition: box-shadow 100ms ease-in-out, background 200ms ease-in-out,
    color 200ms ease-in;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.75);
  backface-visibility: hidden;
}

.button:hover {
  box-shadow: 0px -1px 0px -1px rgba(0, 0, 0, 0.75);
  border: 2px solid #000;
  background: hsl(0, 0%, 15%);
  color: #fff;
  backface-visibility: hidden;
}
</style>
