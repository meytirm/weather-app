<template>
  <q-img v-if="image" :src="image.url" style="height: 400px" fit="cover">
    <div
      class="row justify-between absolute-full"
      style="background: rgba(24, 0, 77, 0.66)"
    >
      <div
        class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 column items-center justify-around"
      >
        <div class="flex flex-center justify-around full-width">
          <div class="text-h1">
            {{ weather.current.temperature }}
            <span>&#176;</span>
            <!--                <span>&#8451;</span>-->
          </div>
          <img
            class="border-radius-50"
            width="50"
            :alt="weather.current.weather_descriptions[0]"
            :src="weather.current.weather_icons[0]"
          />
        </div>
        <div class="">
          <q-badge
            class="text-uppercase text-body1 q-pl-md letter-spacing-10"
            color="indigo-10"
          >
            {{ weather.current.weather_descriptions[0] }}
          </q-badge>
        </div>
        <div
          class="row justify-between full-width text-uppercase text-grey-5 letter-spacing-3"
        >
          <div class="row">
            <div class="column items-center">
              <span class="text-overline">humidity</span>
              <span class="text-body2 text-weight-bold">
                {{ weather.current.humidity }}%
              </span>
            </div>
          </div>
          <div class="weather-info"></div>
          <div class="row">
            <div class="column items-center">
              <span class="text-overline">wind</span>
              <span class="text-body2 text-weight-bold">
                {{ weather.current.wind_speed }} km/h
              </span>
            </div>
          </div>
          <div class="weather-info"></div>
          <div class="row">
            <div class="column items-center">
              <span class="text-overline">wind dir</span>
              <span class="text-body2 text-weight-bold">
                {{ weather.current.wind_dir }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="full-width text-capitalize text-caption text-weight-bold"
          v-if="!!image.alt_description"
        >
          {{ image.alt_description }}
        </div>
      </div>
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 flex items-center justify-center text-body1"
      >
        <div class="text-uppercase column city text-weight-bold">
          {{ weather.location.name }},
          {{ weather.location.country }}
        </div>
      </div>
    </div>
  </q-img>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageModel } from '@/models/image'

export default defineComponent({
  name: 'ShowWeatherInformation',
  props: {
    weather: {
      type: Object,
      required: true,
    },
    image: {
      type: Object as PropType<ImageModel | null>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
