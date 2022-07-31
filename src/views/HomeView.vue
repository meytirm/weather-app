<script setup lang="ts">
import ShowWeatherInformation from '@/components/ShowWeatherInformation.vue'
import SearchLocation from '@/components/SearchLocation.vue'
import { getWeather, loading, image, weather } from '@/composables/weather'

const emit = defineEmits(['date-loaded'])

function loadWeather(location: string) {
  getWeather(location).then((weather) => {
    emit('date-loaded', weather)
  })
}
</script>

<template>
  <main class="full-width full-height row justify-center">
    <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
      <q-card class="shadow-19 border-radius">
        <show-weather-information
          v-if="weather"
          :image="image"
          :weather="weather"
        />
        <q-card-section>
          <search-location @submitted="loadWeather" :loading="loading" />
        </q-card-section>
      </q-card>
    </div>
  </main>
</template>

<style lang="scss">
.border-radius {
  border-radius: 10px !important;
}

.border-radius-50 {
  border-radius: 50%;
}

.q-field--filled .q-field__control::before {
  background: rgba(255, 255, 255, 0.59) !important;
  opacity: 0.5 !important;
}

.letter-spacing-10 {
  letter-spacing: 10px !important;
}

.letter-spacing-3 {
  letter-spacing: 3px !important;
}

.weather-info {
  border: 1px solid rgba(255, 255, 255, 0.59);
}

.city::after {
  content: '';
  border: 3px solid rgba(255, 255, 255, 0.59);
}

//.weather-info {
//  .row {
//    &:not(:last-child)::after {
//      content: '';
//      border: 1px solid rgba(255, 255, 255, 0.59);
//      margin-left: 20px;
//    }
//  }
//}
</style>
