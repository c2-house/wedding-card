import { useRef } from 'react'
import { useClickOutside } from 'hooks/useClickOutside'
import ModalPortal from 'components/Modal/Portal'
import styles from './imageViewer.module.scss'

interface ImageViewerProps {
  imageUrl: string
  close: () => void
}

const ImageViewer = ({ imageUrl, close }: ImageViewerProps) => {
  const ref = useRef<HTMLImageElement>(null)

  useClickOutside(ref, close)

  return (
    <ModalPortal>
      <div className={styles.background}>
        <img ref={ref} src={imageUrl} alt='' />
      </div>
    </ModalPortal>
  )
}

export default ImageViewer
