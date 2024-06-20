<template>
  <div class="flex justify-center px-4 py-0 mb-16">
    <a class="big-button" href="mailto:joshuamasen7@gmail.com"
      >Want to chat about your project? Email&nbsp;me!</a
    >
  </div>
</template>

<style scoped>
.big-button {
  color: var(--base);
  text-decoration: none;
  background: white;
  border: 2px solid var(--base);
  padding: 1.5rem 3rem;
  transition: box-shadow 100ms ease-in-out, background 200ms ease-in-out,
    color 200ms ease-in;
  box-shadow: 4px 4px 0px 0px var(--base);
  backface-visibility: hidden;
}
.big-button:hover {
  box-shadow: 0px -1px 0px -1px var(--base);
  border: 2px solid var(--base);
  background: var(--base);
  backface-visibility: hidden;
  color: white;
}
</style>
