import Image from 'next/image'
import { Icon } from 'react-materialize'

import styles from './ImageResult.module.scss'

const ImageResult = (props) => {
  const handleOnClick = () => {
    props.onClick(props)
  }
  return (
    <div className={styles.imageResult} onClick={handleOnClick}>
      <div className={styles.imageContainer}>
        <Image
          src={props.url}
          key={props.likes}
          alt="hi"
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