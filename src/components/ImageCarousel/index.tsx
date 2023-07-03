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
  fullWidth?: boolean
}

const MAX_WIDTH = 500

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
  fullWidth = true,
}: Props) => {
  const [isMoving, setIsMoving] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchMoved, setTouchMoved] = useState(0)
  const [width, setWidth] = useState(0)
  const [translateX, setTranslateX] = useState('')
  const isWindowZoomed = window.innerWidth !== document.documentElement.clientWidth

  useEffect(() => {
    const initialWidth = fullWidth ? window.innerWidth : Math.min(window.innerWidth, MAX_WIDTH)
    setWidth(initialWidth)
    setTranslateX(`calc(-1 * ${initialWidth} * ${currentIndex + 1}px)`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullWidth])

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
  }, [width, currentIndex, isTouching])

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsTouching(true)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isWindowZoomed) return
    setTouchMoved(touchStart - e.targetTouches[0].clientX)
    setTranslateX(`calc(-1 * ${width} * ${currentIndex + 1} - ${touchMoved}px)`)
  }

  const handleTouchEnd = () => {
    setTouchStart(0)
    setTouchMoved(0)
    setIsTouching(false)
    setIsMoving(true)
    timeout(() => setIsMoving(false))

    if (Math.abs(touchMoved) < width * threshold) {
      setTranslateX(`calc(-1 * ${width} * ${currentIndex + 1}px)`)
      return
    }

    move(touchMoved < 0 ? 'PREV' : 'NEXT')
  }

  const move = (direction: Direction) => {
    const index = direction === 'PREV' ? currentIndex - 1 : currentIndex + 1
    setCurrentIndex(index)
    setTranslateX(`calc(-1 * ${width} * ${index + 1}px)`)

    if (index === -1 || index === images.length) {
      const newIndex = index === -1 ? images.length - 1 : 0
      setCurrentIndex(newIndex)
      timeout(() => setTranslateX(`calc(-1 * ${width} * ${newIndex + 1}px)`))
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
      style={{ width }}
    >
      <div
        className={cx(styles.images, { [styles.padding]: hasPadding })}
        style={{
          transform: `translateX(${translateX})`,
          transition: isMoving ? `transform ${delay}ms ease` : '',
        }}
      >
        <img src={images[images.length - 1]} alt='' style={{ width }} />
        {images.map((image) => (
          <img key={`image-${image}`} src={image} alt='' style={{ width }} />
        ))}
        <img src={images[0]} alt='' style={{ width }} />
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
