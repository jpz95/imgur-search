import Image from "next/image"
import { Button, Modal, Icon } from "react-materialize"

import FullImageModalProps from "./FullImageModalProps"

import styles from "./FullImageModal.module.scss"

const FullImageModal = (props: FullImageModalProps) => {
  return (
    <Modal
      className={styles.modal}
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
      root={props.root.current}
      actions={[
        <Button flat modal="close" node="button" key="close">Close</Button>,
        <Button key="imgur-open">
          <Icon left>open_in_new</Icon>
          Open in Imgur
        </Button>
      ]}
    >
      <div className={styles.modalContent}>
        <div className={styles.imageContainer}>
          {props.imageData?.url && <Image 
            src={props.imageData.url}
            alt="text"
            layout="fill"
          />}
        </div>
        <div>{props.imageData.title}</div>
      </div>
    </Modal>
  )
}

export default FullImageModal