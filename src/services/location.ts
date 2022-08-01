import apiService from '@/services/axiosConfig'

function locationService(place: string) {
  const baseUrl = import.meta.env.VITE_MAPBOX_URL
  const accessKey = import.meta.env.VITE_MAPBOX_ACCESS_KEY

  return apiService.get(`${baseUrl}${place}.json?access_token=${accessKey}`)
}

export { locationService }
