<script setup lang="ts">
import { Button } from 'primevue'
import '@lottiefiles/lottie-player'
</script>
<template>
  <div id="AboutMe" class="p-3 text-white">
    <div class="flex flex-col justify-starth-full items-center h-full px-2">
      <h1 class="text-3xl mb-5 lg:mb-0">About Me</h1>
      <div
        class="flex flex-col lg:flex-row justify-between items-center h-full w-full"
      >
        <div
          class="flex flex-col justify-center h-full w-1/2 lg:mr-4 mb-5 lg:mb-0 order-2 lg:order-1"
        >
          <p class="text-lg mb-10">
            &nbsp;&nbsp;&nbsp;&nbsp;An ordinary web full-stack developer who
            currently lives in Japan (and a DOG person 🐕). I primarily focus on
            frontend development but I am also learning about backend and
            cloud-native stuff. I'm a little bit shy but feel free to contact me
            via these services below.
          </p>
          <div class="w-full flex justify-center">
            <Button
              as="a"
              class="mr-2"
              icon="pi pi-twitter"
              variant="outlined"
              href="https://twitter.com/dsjinj"
              target="_blank"
            />
            <Button
              as="a"
              class="mr-2"
              icon="pi pi-github"
              variant="outlined"
              href="https://github.com/dsjin"
              target="_blank"
            />
            <Button
              as="a"
              icon="pi pi-linkedin"
              variant="outlined"
              href="https://www.linkedin.com/in/thatchakonj/"
              target="_blank"
            />
          </div>
        </div>
        <div
          class="flex justify-center h-full w-1/2 ld:ml-4 mb-5 lg:mb-0 order-1 lg:order-2"
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_o1JRaPxx1E.json"
            background="transparent"
            speed="1"
            class="w-3/4"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#AboutMe {
  @include common.onepage-wrapper;
}
</style>
