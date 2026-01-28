<script setup lang="ts">
import { Button, Chip, DataView, Image } from 'primevue'
import type { WorkItem } from '../assets/types/work'
import { ref, type Ref } from 'vue'
import { workItems } from '../assets/data/workItems'

const items: Ref<WorkItem[]> = ref(workItems)
</script>
<template>
  <div id="Work">
    <div class="px-4 flex flex-col items-center text-white mb-2">
      <h1 class="text-3xl mb-5 mt-2">Personal Works</h1>
      <DataView :value="items" data-key="id" layout="grid" paginator :rows="5">
        <template #grid="slotProps">
          <div class="grid grid-cols-12 gap-4" style="background:">
            <div
              v-for="(item, index) in slotProps.items"
              :key="index"
              class="col-span-12"
            >
              <div class="bg-gray-700 text-white rounded-lg p-5">
                <div class="flex flex-col m-4">
                  <Image
                    v-if="item.thumbnailPath"
                    :src="item.thumbnailPath"
                    image-class="w-full h-80 object-cover"
                    class="mb-4"
                    preview
                  />
                  <div class="flex items-center mb-4">
                    <h1
                      class="text-lg mr-2 text-wrap text-ellipsis overflow-hidden w-auto"
                    >
                      {{ item.title }} ( {{ item.year }} )
                    </h1>
                    <i
                      v-if="item.inProcess"
                      v-tooltip="{
                        value: 'Under Development',
                        pt: {
                          text: '!bg-black !text-primary-contrast !text-xs',
                        },
                      }"
                      class="pi pi-circle-fill text-yellow-300 text-xs animate-pulse"
                    />
                  </div>
                  <p class="mb-4">
                    {{ item.description }}
                  </p>
                  <div class="flex flex-wrap gap-4 mb-4">
                    <Chip
                      v-for="(stackItem, index) in item.techStacks"
                      :key="index"
                      :label="stackItem"
                    />
                  </div>
                  <Button
                    v-if="item.link"
                    as="a"
                    label="Visit"
                    :href="item.link"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>
<style lang="scss">
#Work {
  @include common.longpage-wrapper;
}
</style>
