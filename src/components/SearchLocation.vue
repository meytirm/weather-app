<template>
  <q-form
    class="row q-col-gutter-md"
    @submit.prevent="submitted"
    style="z-index: 1000"
  >
    <div class="col-sm-8 col-xs-12">
      <q-select
        dense
        filled
        v-model="location"
        use-input
        hide-selected
        fill-input
        clearable
        bg-color="white"
        input-debounce="0"
        label="Search Location..."
        :options="places"
        @filter="searchLocation"
      >
        <template #no-option>
          <q-item>
            <q-item-section class="text-grey"> No results</q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <div class="col-sm-4 col-xs-12">
      <q-btn
        dense
        type="submit"
        class="full-height full-width"
        color="amber-4"
        text-color="black"
        :disable="!location"
        :loading="loading"
        >Get weather
      </q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchLocation, places } from '@/composables/location'

export default defineComponent({
  name: 'SearchLocation',
  emits: ['submitted', 'update:modelValue'],
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const location = ref<string>('')
    const isSelected = ref<boolean>(false)

    function submitted() {
      emit('submitted', location.value)
      location.value = ''
    }

    return {
      location,
      searchLocation,
      places,
      submitted,
      isSelected,
    }
  },
})
</script>

<style lang="scss" scoped></style>
