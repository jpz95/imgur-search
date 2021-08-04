import Image from "next/image"
import { Button, Modal, Icon } from "react-materialize"

import isBrowser from "../../utils/isBrowser"

import FullImageModalProps from "../../types/search-results/FullImageModalProps"

import styles from "./FullImageModal.module.scss"

const FullImageModal = (props: FullImageModalProps) => {
  const { imageData = {} } = props

  const openInImgur = () => {
    window.open(imageData.externalUrl, '_blank', 'noopener')
  }

  if (!isBrowser || !props.root) {
    return <div></div>
  }

  return (
    <Modal
      bottomSheet={false}
      fixedFooter={true}
      open={props.isModalOpen}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
        onCloseEnd: () => props.onCloseEnd()
      }}
      root={props.root?.current}
      actions={[
        <Button flat modal="close" node="button" key="close">Close</Button>,
        <Button className="green lighten-1" key="imgur-open" onClick={openInImgur}>
          <Icon left>open_in_new</Icon>
          Open in Imgur
        </Button>
      ]}
    >
      <div className={styles.modalContent}>
        <div className={styles.imageContainer}>
          {imageData?.thumbnail && <Image 
            src={imageData.thumbnail}
            alt={imageData.title}
            layout="fill"
          />}
        </div>
        <div className={styles.description}>
          <span className={styles.title}>{imageData.title}</span>
          <span className={styles.views}>
            <Icon className="blue-text text-lighten-1">visibility</Icon>
            {imageData.views}
          </span>
          <span className={styles.likes}>
            <Icon className="red-text">favorite_border</Icon>
            {imageData.likes}
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default FullImageModal