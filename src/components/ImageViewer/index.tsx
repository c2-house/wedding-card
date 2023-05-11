import ModalPortal from 'components/Modal/Portal'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as LeftIcon } from 'assets/icons/chevron_left.svg'
import { ReactComponent as RightIcon } from 'assets/icons/chevron_right.svg'
import styles from './imageViewer.module.scss'

interface ImageViewerProps {
  currentUrl: string
  setCurrentUrl: (url: string) => void
  currentIndex: number
  setCurrentIndex: (index: number) => void
  imageList: string[]
  close: () => void
}

const ImageViewer = ({
  currentUrl,
  setCurrentUrl,
  currentIndex,
  setCurrentIndex,
  imageList,
  close,
}: ImageViewerProps) => {
  const handlePrevClick = () => {
    const index = currentIndex === 0 ? imageList.length - 1 : currentIndex - 1
    setCurrentIndex(index)
    setCurrentUrl(imageList[index])
  }

  const handleNextClick = () => {
    const index = currentIndex === imageList.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(index)
    setCurrentUrl(imageList[index])
  }

  return (
    <ModalPortal>
      <div className={styles.background}>
        <button className={styles.closeButton} type='button' onClick={close}>
          <CloseIcon />
        </button>
        <img src={currentUrl} alt='' />
        <div className={styles.controller}>
          <button type='button' onClick={handlePrevClick}>
            <LeftIcon />
          </button>
          <div>
            {currentIndex + 1} / {imageList.length}
          </div>
          <button type='button' onClick={handleNextClick}>
            <RightIcon />
          </button>
        </div>
      </div>
    </ModalPortal>
  )
}

export default ImageViewer
