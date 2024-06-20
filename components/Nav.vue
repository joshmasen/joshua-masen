<template>
  <nav class="sticky top-0 z-10 flex items-center justify-center bg-background">
    <div
      class="flex items-center justify-between w-full max-w-6xl px-4 py-3 border-b lg:px-8 lg:py-6 border-base"
    >
      <NuxtLink
        class="text-base font-semibold no-underline hover:text-base-light"
        to="/"
        ><span aria-hidden="true">😎</span> Joshua Masen</NuxtLink
      >

      <ul v-if="$route.name !== 'blog'">
        <li>
          <NuxtLink
            class="flex items-center text-sm text-base font-semibold no-underline hover:text-primary"
            to="/blog"
            ><svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              /></svg
            >Back to blog</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
