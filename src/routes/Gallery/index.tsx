import { MouseEvent, useState } from 'react'
import { useScrollTo } from 'hooks/useScrollTo'
import { useModal } from 'hooks/useModal'
import ImageGrid from 'components/ImageGrid'
import ImageViewer from 'components/ImageViewer'

import gif01 from 'assets/images/GIF_01.gif'
import gif02 from 'assets/images/GIF_02.gif'
import image02 from 'assets/images/IMG_0026.jpg'
import image03 from 'assets/images/IMG_0043.jpg'
import image04 from 'assets/images/IMG_0078.jpg'
import image05 from 'assets/images/IMG_0123.jpg'
import image06 from 'assets/images/IMG_0145.jpg'
import image07 from 'assets/images/IMG_0154.jpg'
import image08 from 'assets/images/IMG_0164.jpg'
import image09 from 'assets/images/IMG_0181.jpg'
import image10 from 'assets/images/IMG_0190.jpg'
import image11 from 'assets/images/IMG_0220.jpg'
import image12 from 'assets/images/IMG_0235.jpg'
import image13 from 'assets/images/IMG_0269.jpg'
import image14 from 'assets/images/IMG_0287.jpg'
import image15 from 'assets/images/IMG_0337.jpg'
import image16 from 'assets/images/IMG_0348.jpg'
import image17 from 'assets/images/IMG_0374.jpg'
import image18 from 'assets/images/IMG_0383.jpg'
import image19 from 'assets/images/IMG_0415.jpg'
import image20 from 'assets/images/IMG_0433.jpg'
import image21 from 'assets/images/IMG_0441.jpg'
import image22 from 'assets/images/IMG_0450.jpg'
import image23 from 'assets/images/IMG_0521.jpg'

const imageList = [
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  gif01,
  gif02,
]

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { isModalOpen, openModal, closeModal } = useModal()

  useScrollTo(0, 0)

  const handleImageClick = (e: MouseEvent) => {
    setSelectedImageIndex(Number((e.target as HTMLImageElement).dataset.index))
    openModal()
  }

  return (
    <section>
      <h2>GALLERY</h2>
      <ImageGrid imageList={imageList} handleImageClick={handleImageClick} />
      {isModalOpen && <ImageViewer imageList={imageList} currentIndex={selectedImageIndex} close={closeModal} />}
    </section>
  )
}

export default Gallery
