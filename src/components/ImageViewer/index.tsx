import ModalPortal from 'components/Modal/Portal'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as LeftIcon } from 'assets/icons/chevron_left.svg'
import { ReactComponent as RightIcon } from 'assets/icons/chevron_right.svg'
import styles from './imageViewer.module.scss'

interface ImageViewerProps {
  imageList: string[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
  close: () => void
  hasButton?: boolean
  children?: React.ReactNode
}

const ImageViewer = ({ imageList, currentIndex, setCurrentIndex, close, hasButton, children }: ImageViewerProps) => {
  const handlePrevClick = () => {
    const index = currentIndex === 0 ? imageList.length - 1 : currentIndex - 1
    setCurrentIndex(index)
  }

  const handleNextClick = () => {
    const index = currentIndex === imageList.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }

  return (
    <ModalPortal>
      <div className={styles.background}>
        <div className={styles.top}>
          <button type='button' onClick={close}>
            <CloseIcon />
          </button>
        </div>
        {children || <div className={styles.image} style={{ backgroundImage: `url(${imageList[currentIndex]})` }} />}
        <div className={styles.bottom}>
          {hasButton && (
            <button type='button' onClick={handlePrevClick}>
              <LeftIcon />
            </button>
          )}
          <div>
            {currentIndex + 1} / {imageList.length}
          </div>
          {hasButton && (
            <button type='button' onClick={handleNextClick}>
              <RightIcon />
            </button>
          )}
        </div>
      </div>
    </ModalPortal>
  )
}

export default ImageViewer
