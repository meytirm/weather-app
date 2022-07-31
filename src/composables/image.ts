import { imagesService } from '@/services/image'
import { AxiosResponse } from 'axios'
import type { ImageModel } from '@/models/image'

function getImage(query: string) {
  return imagesService(query).then((data: AxiosResponse) => {
    const imagesUrls = data.data.results.map((image: ImageModel) => ({
      url: image.urls.regular,
      description: image.description,
      alt_description: image.alt_description,
    }))

    const randomImageNumber = Math.floor(Math.random() * imagesUrls.length)
    return imagesUrls[randomImageNumber]
  })
}

export default getImage
