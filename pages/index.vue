<template>
  <div>
    <header class="flex px-8 pt-6 pb-12 lg:pb-24 lg:pt-16 sm:justify-center">
      <h1 class="text-7xl leading-[1.3]">
        Hey <span class="tada" aria-hidden="true">👋</span><br />
        I'm Josh Masen.
      </h1>
    </header>
    <main class="max-w-lg px-8 pt-0 pb-16 m-auto">
      <section class="flex flex-col leading-7 gap-5">
        <p>
          I’ve been building stuff on the web for a long time. My first client
          was a family friend who needed a website for her at-home nursing
          business. I think I was 12 years old. Fast forward to college: while
          studying graphic design, I was still teaching myself to code and
          freelancing on the side. By the time I earned my degree, I realized I
          still had a passion for building things on the web, so I jumped into
          web development full-time.
        </p>
        <p>
          I spent the early years of my career at design agencies and larger
          companies, where the overlap of my design education and tech
          background led me to projects in branding, advertising, and ecommerce.
          Eventually, I got curious about startups and entrepreneurship and
          joined an early-stage startup as employee #1. As is typical in
          startups, I went wherever I could provide value—first in tech support,
          then in marketing, and ultimately into full-on software engineering.
        </p>
        <p>
          After that company was acquired, I realized how much I missed building
          software in the scrappy early stages. That’s when I joined Workshop as
          an early engineer, helping build an email-first internal
          communications platform. And that’s where I am today—still deeply
          passionate about building cool stuff on the web.
        </p>

        <p>
          Here's what I've been up to since then, in resume-style reverse
          chronological order:
        </p>
      </section>

      <!-- Jobs -->
      <ul>
        <Job :job="job" v-for="job in data.body" :key="job.employer">{{
          job.employer
        }}</Job>
      </ul>
    </main>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("jobs", () =>
  queryContent("/jobs").findOne()
);
</script>

<style scoped>
h1 {
  display: inline-block;
  background-image: linear-gradient(
    to right,
    var(--secondary) 0,
    var(--secondary) 100%
  );
  background-position: 0 3.5em;
  background-size: 100% 20%;
  background-repeat: no-repeat;
  margin-top: 0;
  font-size: clamp(3rem, 9.1vw - 1.2rem, 7rem);
  font-weight: 600;
  letter-spacing: -0.25vw;
}

@media (min-width: 429px) {
  h1 {
    background-position: 0 2.2em;
  }
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  display: inline-block;
  animation: tada 1s forwards;
  animation-delay: 1s;
}
</style>
