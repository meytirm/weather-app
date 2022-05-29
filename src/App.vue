<script setup lang="ts">
import { ref } from 'vue'
import { useIcon } from '@/composables/icon'

const drawerLeft = ref(false)
useIcon()
</script>

<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn
            flat
            @click="drawerLeft = !drawerLeft"
            round
            dense
            icon="menu"
          />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="200"
        :breakpoint="700"
        elevated
        class="bg-primary text-white"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding class="flex flex-center">
          <RouterView />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
@import '@/assets/base.css';

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav a:first-of-type {
  border: 0;
}
</style>
