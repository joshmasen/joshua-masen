<template>
  <li class="mb-12 job first:mt-20">
    <h3 class="mb-6 text-3xl font-semibold text-primary">
      <a :href="job.employerUrl" class="no-underline">{{ job.employer }}</a>
    </h3>
    <ul class="pl-12 roles">
      <li
        v-for="role in job.roles"
        :key="role.dates"
        class="relative mb-8 role"
      >
        <h4 class="mb-2 text-2xl font-semibold">{{ role.title }}</h4>
        <small class="block mb-3 text-sm italic">{{ role.dates }}</small>
        <p class="mb-3 leading-7" v-html="role.summary" />
        <ul class="flex flex-wrap gap-2">
          <li v-for="tech in role.technologies" :key="tech">
            <Badge>{{ tech }}</Badge>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
interface Role {
  title: string;
  dates: string;
  summary: string;
  technologies: string[];
}

interface Job {
  employer: string;
  employerUrl: string;
  roles: Role[];
}

defineProps<{
  job: Job;
}>();
</script>

<style>
.role:before {
  color: var(--primary);
  content: "•";
  font-size: 2rem;
  position: absolute;
  left: -51px;
  top: 5px;
}

.role:after {
  color: var(--primary);
  content: "";
  position: absolute;
  height: calc(100% - 20px);
  top: 20px;
  left: -43px;
  width: 2px;
  background-color: var(--primary);
}

@media (min-width: 650px) {
  .role:before {
    content: "•";
    font-size: 2rem;
    position: absolute;
    left: -51px;
    top: 5px;
  }
}
</style>
