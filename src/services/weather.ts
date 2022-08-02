import apiService from '@/services/axiosConfig'

function weatherService(placeName: string) {
  const accessKey = import.meta.env.VITE_WEATHER_ACCESS_KEY
  const baseUrl = import.meta.env.VITE_WEATHER_URL

  return apiService.get(
    `${baseUrl}current?access_key=${accessKey}&query=${placeName}&units=m`
  )
}

export { weatherService }
