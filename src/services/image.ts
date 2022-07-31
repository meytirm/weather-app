import apiService from '@/services/axiosConfig'

function imagesService(city: string) {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const baseUrl = import.meta.env.VITE_UNSPLASH_URL

  return apiService.get(
    `${baseUrl}/search/photos?query=${city}&client_id=${accessKey}`
  )
}

export { imagesService }
