<script setup lang="ts">
import { Button, Panel, Chip } from 'primevue'
import { experiences } from '../assets/data/experienceItems'
import { skills } from '../assets/data/skillItems'
import '@lottiefiles/lottie-player'
</script>
<template>
  <div id="AboutMe" class="p-4 text-white lg:p-14">
    <div class="flex flex-col justify-start items-center h-full px-2 mb-5 lg:mb-0">
      <h1 class="text-3xl mb-5 lg:mb-0">About Me</h1>
      <div class="flex flex-col lg:flex-row lg:justify-between justify-stretch items-center h-full w-full">
        <div class="flex flex-col justify-center lg:h-full lg:w-1/2 w-full lg:mr-4 mb-5 lg:mb-0 order-2 lg:order-1">
          <p class="text-lg mb-10">
            &nbsp;&nbsp;&nbsp;&nbsp;An ordinary web full-stack developer who
            currently lives in Japan (and a DOG person 🐕). I primarily focus on
            frontend development but I am also learning about backend and
            cloud-native stuff. I'm a little bit shy but feel free to contact me
            via these services below.
          </p>
          <div class="w-full flex justify-center">
            <Button as="a" class="mr-2" icon="pi pi-envelope" variant="outlined" href="mailto:me@dsjin.co" />
            <Button as="a" class="mr-2" icon="pi pi-twitter" variant="outlined" href="https://twitter.com/dsjinj"
              target="_blank" />
            <Button as="a" class="mr-2" icon="pi pi-github" variant="outlined" href="https://github.com/dsjin"
              target="_blank" />
            <Button as="a" icon="pi pi-linkedin" variant="outlined" href="https://www.linkedin.com/in/thatchakonj/"
              target="_blank" />
          </div>
        </div>
        <div class="flex justify-center lg:h-full w-1/2 ld:ml-4 mb-5 lg:mb-0 order-1 lg:order-2">
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_o1JRaPxx1E.json" background="transparent"
            speed="1" class="w-3/4" loop autoplay />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center h-full px-2 mb-5">
      <h1 class="text-3xl mb-10">
        Skills / Tech Stacks
      </h1>
      <div class="flex flex-wrap justify-center gap-4 mb-4 lg:w-3/4">
        <Chip
          v-for="item in skills"
          :key="item.id"
          :label="item.name"
        />
      </div>
    </div>
    <div class="flex flex-col items-center h-full px-2">
      <h1 class="text-3xl mb-10">
        Experiences
      </h1>
      <Panel :key="item.id" v-for="item in experiences" :header="item.title" class="mb-5 w-full lg:w-3/4">
        <template #icons>
          {{ item.year }}
        </template>
        <div v-html="item.template"></div>
      </Panel>
    </div>
  </div>
</template>
<style lang="scss">
#AboutMe {
  @include common.longpage-wrapper;
}
.experience-list {
  @apply list-disc list-inside pl-6
}
</style>
