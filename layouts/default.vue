<template>
  <div>
    <Body
      class="flex flex-col justify-center font-normal leading-7 bg-background"
    >
      <Banner
        >I've got some limited time available for freelance projects. Email
        me!</Banner
      >
      <slot />
    </Body>

    <Contact />

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const title = "Joshua Masen | Software Engineer";
    return titleChunk ? `${titleChunk} | ${title}` : title;
  },

  meta: [
    {
      name: "description",
      content:
        "I like to build stuff - usually on the web. I am currently a Senior Software Engineer building internal communications software at Workshop.",
    },
  ],
});
</script>
