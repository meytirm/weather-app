import { weatherService } from '@/services/weather'
import { AxiosResponse } from 'axios'
import type { WeatherModel } from '@/models/weather'
import type { ImageModel } from '@/models/image'
import { ref } from 'vue'
import getImage from '@/composables/image'

const loading = ref<boolean>(false)
const image = ref<ImageModel | null>(null)
const weather = ref<WeatherModel | null>(null)

function getWeather(location: string) {
  loading.value = true
  return weatherService(location)
    .then((data: AxiosResponse) => {
      weather.value = data.data
      if (weather.value) {
        getImage(weather.value.location.name.toLowerCase()).then(
          (randomImage) => {
            image.value = randomImage
            loading.value = false
          }
        )
        return {
          timezone_id: weather.value.location.timezone_id,
          localtime: weather.value.location.localtime,
        }
      }
    })
    .catch((e) => {
      console.log(e)
      loading.value = false
    })
}

export { getWeather, loading, image, weather }
