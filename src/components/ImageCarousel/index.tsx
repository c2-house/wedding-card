import { TouchEvent, useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './imageCarousel.module.scss'

type Direction = 'PREV' | 'NEXT'

interface Props {
  images: string[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
  intervalTime?: number
  delay?: number
  threshold?: number
  hasIndicator?: boolean
  indicatorPosition?: 'inner' | 'outer'
  autoPlay?: boolean
  hasPadding?: boolean
}

const ImageCarousel = ({
  images,
  currentIndex,
  setCurrentIndex,
  intervalTime = 3000,
  delay = 500,
  threshold = 0.25,
  hasIndicator = true,
  indicatorPosition = 'inner',
  autoPlay = true,
  hasPadding = false,
}: Props) => {
  const [isMoving, setIsMoving] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchMoved, setTouchMoved] = useState(0)
  const [translateX, setTranslateX] = useState(`calc(-100vw * ${currentIndex + 1})`)
  const isWindowZoomed = window.innerWidth !== document.documentElement.clientWidth

  useEffect(() => {
    if (!autoPlay || isTouching) return
    const interval = setInterval(() => {
      setIsMoving(true)
      move('NEXT')
      timeout(() => setIsMoving(false))
    }, intervalTime)

    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, intervalTime, isTouching])

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsTouching(true)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isWindowZoomed) return
    setTouchMoved(touchStart - e.targetTouches[0].clientX)
    setTranslateX(`calc(-100vw * ${currentIndex + 1} - ${touchMoved}px)`)
  }

  const handleTouchEnd = () => {
    setTouchStart(0)
    setTouchMoved(0)
    setIsTouching(false)
    setIsMoving(true)
    timeout(() => setIsMoving(false))

    if (Math.abs(touchMoved) < window.innerWidth * threshold) {
      setTranslateX(`calc(-100vw * ${currentIndex + 1})`)
      return
    }

    move(touchMoved < 0 ? 'PREV' : 'NEXT')
  }

  const move = (direction: Direction) => {
    const index = direction === 'PREV' ? currentIndex - 1 : currentIndex + 1
    setCurrentIndex(index)
    setTranslateX(`calc(-100vw * ${index + 1})`)

    if (index === -1 || index === images.length) {
      const newIndex = index === -1 ? images.length - 1 : 0
      setCurrentIndex(newIndex)
      timeout(() => setTranslateX(`calc(-100vw * ${newIndex + 1})`))
    }
  }

  const timeout = (callback: () => void) => {
    const timer = setTimeout(() => {
      callback()
      clearTimeout(timer)
    }, delay)
  }

  return (
    <div
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={cx(styles.images, { [styles.padding]: hasPadding })}
        style={{
          transform: `translateX(${translateX})`,
          transition: isMoving ? `transform ${delay}ms ease` : '',
        }}
      >
        <img src={images[images.length - 1]} alt='' />
        {images.map((image) => (
          <img key={`image-${image}`} src={image} alt='' />
        ))}
        <img src={images[0]} alt='' />
      </div>
      {hasIndicator && (
        <div className={cx(styles.indicators, styles[indicatorPosition])}>
          {images.map((image, index) => (
            <div key={`indicator-${image}`} className={cx({ [styles.active]: index === currentIndex })} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
