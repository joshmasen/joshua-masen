<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style>
.badge {
  background-color: var(--secondary);
  color: var(--base);
  border-radius: 25px;
  padding: 0rem 0.5rem;
  white-space: nowrap;
  font-size: 0.65rem;
}
</style>
