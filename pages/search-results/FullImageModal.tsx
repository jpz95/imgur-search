import { Modal } from "react-materialize"

import FullImageModalProps from "./FullImageModalProps"

const FullImageModal = (props: FullImageModalProps) => {
  return (
    <Modal
      bottomSheet={false}
      fixedFooter={false}
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
    >
    </Modal>
  )
}

export default FullImageModal