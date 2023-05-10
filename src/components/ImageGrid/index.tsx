import { MouseEvent } from 'react'

import styles from './imageGrid.module.scss'

export interface IImageGridProps {
  imageList: string[]
  handleImageClick?: (e: MouseEvent) => void
}

const ImageGrid = ({ imageList, handleImageClick }: IImageGridProps) => {
  return (
    <ul className={styles.imageList}>
      {imageList.map((image) => (
        <li key={image}>
          <button type='button' onClick={handleImageClick}>
            <img src={image} alt='' />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ImageGrid
