import Image from 'next/image'
import { Icon } from 'react-materialize'

import styles from './ImageResult.module.scss'

import ImageResultProps from '../../types/search-results/ImageResultProps'

const ImageResult = (props: ImageResultProps) => {
  const handleOnClick = () => {
    if (props.onClick){
      props.onClick(props)
    }
  }

  const noImageFallback = '/no-image-available.svg'

  let isValidUrl = true
  try {
    new URL(props.thumbnail)
  } catch (error) {
    isValidUrl = false
  }

  return (
    <div className={styles.imageResult} onClick={handleOnClick}>
      <div className={styles.imageContainer}>
        <Image
          src={isValidUrl && props.thumbnail || noImageFallback}
          key={props.imageId}
          alt={props.title}
          layout="fill"
        ></Image>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{props.title}</div>
        <span className={styles.likes}>
          <Icon className={styles.likesIcon}>favorite_border</Icon>
          <span>{props.likes}</span>
        </span>
      </div>
    </div>
  )
}

export default ImageResult;