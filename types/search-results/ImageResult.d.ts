import type Image from './Image'

type ImageResult = {
  id: string
  title: string
  description?: string
  datetime: number
  link: string
  score: number
  ups: number
  views: number
  account_url: string
  images_count: number
  images: Array<Image>
}

export default ImageResult