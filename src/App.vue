<script setup lang="ts">
import { ref } from 'vue'
import { useIcon } from '@/composables/icon'
import { useQuasar } from 'quasar'
import type { LocationModel } from '@/models/weather'
import { useMeta } from 'quasar'

useMeta({
  title: 'Weather',
})

// const drawerLeft = ref(false)
const timeNow = ref<LocationModel | null>(null)
const $q = useQuasar()
const darkMode = ref($q.dark.isActive)

function toggleDarkMode(isDark: boolean | 'auto') {
  $q.dark.set(isDark)
}

function dateLoaded(date: LocationModel) {
  timeNow.value = date
}

toggleDarkMode(darkMode.value)
useIcon()
</script>

<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2"
    >
      <q-header elevated class="bg-indigo-10-custom">
        <q-toolbar>
          <!--          <q-btn-->
          <!--            flat-->
          <!--            @click="drawerLeft = !drawerLeft"-->
          <!--            round-->
          <!--            dense-->
          <!--            icon="menu"-->
          <!--          />-->
          <q-toolbar-title>Header</q-toolbar-title>
          <q-toolbar-title v-if="timeNow">{{
            timeNow.localtime
          }}</q-toolbar-title>
          <q-toggle
            label="dark mode"
            model-value="darkMode"
            v-model="darkMode"
            @click="toggleDarkMode(darkMode)"
          />
        </q-toolbar>
      </q-header>

      <!--      <q-drawer-->
      <!--        dark-->
      <!--        class="bg-indigo-10-custom"-->
      <!--        v-model="drawerLeft"-->
      <!--        show-if-above-->
      <!--        :width="200"-->
      <!--        :breakpoint="700"-->
      <!--        elevated-->
      <!--      >-->
      <!--        <q-scroll-area class="fit">-->
      <!--          <div class="q-pa-sm">-->
      <!--            <div v-for="n in 10" :key="n">Drawer {{ n }} / 50</div>-->
      <!--          </div>-->
      <!--        </q-scroll-area>-->
      <!--      </q-drawer>-->

      <q-page-container>
        <q-page class="flex flex-center">
          <RouterView @date-loaded="dateLoaded" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.css';

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav a:first-of-type {
  border: 0;
}

.blur-background {
  filter: blur(1.5px);
}
</style>
