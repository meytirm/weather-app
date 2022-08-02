export interface ImageModel {
  height: number
  urls: UrlsModel
  url: string
  width: number
  description: string
  alt_description: string
}

interface UrlsModel {
  raw: string
  full: string
  regular: string
  small: string
  small_s3: string
  thumb: string
}
