import { useRef } from 'react'

import { useClickOutside } from 'hooks/useClickOutside'
import ModalPortal from 'components/Modal/Portal'
import ImageCarousel from 'components/ImageCarousel'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import styles from './imageViewer.module.scss'

interface ImageViewerProps {
  imageUrl?: string
  imageList?: string[]
  currentIndex?: number
  close: () => void
}

const ImageViewer = ({ imageUrl, imageList, currentIndex, close }: ImageViewerProps) => {
  const ref = useRef<HTMLImageElement>(null)
  console.log(currentIndex)
  useClickOutside(ref, close)

  return (
    <ModalPortal>
      <div className={styles.background}>
        <div className={styles.navBar}>
          <button type='button' onClick={close}>
            <CloseIcon />
          </button>
        </div>
        {imageUrl && <img ref={ref} src={imageUrl} alt='' />}
        {imageList && (
          <ImageCarousel images={imageList} autoPlay={false} startIndex={currentIndex} hasIndicator={false} />
        )}
      </div>
    </ModalPortal>
  )
}

export default ImageViewer
