import { MutableRefObject } from "react"

type FullImageModalProps = {
  imageData: any
  isModalOpen: boolean
  onCloseEnd: () => void
  root: MutableRefObject
}

export default FullImageModalProps