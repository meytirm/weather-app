import { locationService } from '@/services/location'
import { AxiosResponse } from 'axios'
import type { FeatureModel } from '@/models/location'
import { ref } from 'vue'

const places = ref<Array<string>>([])

function searchLocation(item: string, update: (value: () => void) => void) {
  setTimeout(() => {
    update(() => {
      locationService(item).then((data: AxiosResponse) => {
        places.value = data.data.features.map(
          (item: FeatureModel) => item.place_name
        )
      })
    })
  }, 1500)
}

export { searchLocation, places }
