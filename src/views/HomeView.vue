<script setup lang="ts">
import { Button } from 'primevue'
</script>
<template>
  <div
    id="Home"
    class="p-3 flex flex-col justify-center items-center text-white"
  >
    <div class="flex flex-col text-right justify-center mb-2">
      <h1 class="text-9xl">DS</h1>
    </div>
    <div class="flex flex-col text-center justify-center items-center">
      <h1 class="text-2xl mb-4">Thatchakon Jom-ud</h1>
      <h2 class="text-xl mb-4">Dispatch Web Developer @ Human Resocia</h2>
      <Button size="small" class="w-fit" variant="outlined">
        Explore more
      </Button>
    </div>
  </div>
</template>
<style lang="scss">
#Home {
  @include common.onepage-wrapper;
}
</style>
