<template>
  <footer class="p-3 text-sm text-center bg-background">
    This site is built with
    <a target="_blank" rel="noopener" href="https://nuxtjs.org">Nuxt</a>
    & hosted on
    <a target="_blank" rel="noopener" href="https://netlify.com">Netlify</a>.
  </footer>
</template>

<style scoped>
footer a {
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 200ms ease-in-out;
}

footer a:hover {
  color: var(--primary-hover);
}
</style>
