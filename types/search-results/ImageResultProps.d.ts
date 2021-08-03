type ImageResultProps = {
  externalUrl: string
  thumbnail: string
  likes: number
  views: number
  title: string
  imageId: string
  onClick: (result: ImageResultProps) => void
}

export default ImageResultProps