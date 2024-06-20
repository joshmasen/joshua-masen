<template>
  <div>
    <Nav />
    <main class="max-w-4xl px-8 pt-0 pb-16 m-auto mb-32">
      <header class="flex px-8 pt-6 pb-12 lg:pb-24 lg:pt-16 sm:justify-center">
        <h1 class="text-7xl leading-[1.3] font-semibold">Blog</h1>
      </header>

      <ul class="flex flex-col divide-y divide-secondary">
        <li v-for="post in data" :key="post.id" class="py-8">
          <NuxtLink
            class="text-xl font-semibold no-underline lg:text-4xl"
            :to="post._path"
            ><h2>
              {{ post.title }}
            </h2></NuxtLink
          >
          <!-- <p>{{ post.description }}</p> -->
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
onMounted(async () => {
  if (process.env.NODE_ENV !== "development") {
    await navigateTo("/");
  } else {
    const { data } = await useAsyncData("blog", () =>
      queryContent("/blog").find()
    );
  }
});
</script>
