<template>
  <div>
    <Nav />
    <ContentDoc v-slot="{ doc }">
      <header
        class="flex max-w-6xl px-8 pt-6 pb-12 m-auto lg:pb-24 lg:pt-16 sm:justify-center"
      >
        <h1 class="leading-[1.3] font-semibold">
          {{ doc.title }}
        </h1>
      </header>
      <main class="max-w-lg px-8 pt-0 pb-16 m-auto mb-32">
        <ContentRenderer :value="doc" class="prose" />
      </main>
    </ContentDoc>
  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(2rem, 6.1vw - 1.2rem, 4rem);
  letter-spacing: -0.25vw;
}
</style>
