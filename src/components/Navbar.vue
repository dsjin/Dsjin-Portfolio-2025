<script setup lang="ts">
import { Menubar } from 'primevue'
import type { MenuItem } from 'primevue/menuitem'
import { ref, type Ref } from 'vue'
import { navItems } from '../assets/data/navItems'

const items: Ref<MenuItem[]> = ref(navItems)
</script>
<template>
  <Menubar
    :model="items"
    class="m-3 rounded-md"
    :style="{
      height: '3rem',
    }"
  >
    <template #start>
      <p>DSJIN Portfolio</p>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>
  </Menubar>
</template>
