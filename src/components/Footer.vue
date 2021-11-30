<template>
  <footer class="footer">
    This site is built with
    <a target="_blank" rel="noopener" href="https://astro.build">Astro</a>
    & hosted on
    <a target="_blank" rel="noopener" href="https://netlify.com">Netlify</a>.
  </footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.footer {
  background-color: var(--bg);
  font-size: 0.7rem;
  text-align: center;
  padding: 0.85em;
}
</style>
