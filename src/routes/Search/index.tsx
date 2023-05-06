import { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from 'react'

import { SAMPLE_IMAGES } from 'constants/images'
import { useModal } from 'hooks/useModal'
import { getPlaceInferenceApi } from 'services/place'
import { IPlaceApiRes, TSearchStatus } from 'types/place'

import { ImageIcon } from 'assets/svgs'
import ImageGrid from 'components/ImageGrid'
import Modal from 'components/Modal'
import Description from './Description'
import styles from './search.module.scss'

const Search = () => {
  const [status, setStatus] = useState<TSearchStatus>('init')
  const [imageSrc, setImageSrc] = useState('')
  const [imageFile, setImageFile] = useState<File>()
  const [response, setResponse] = useState<IPlaceApiRes>()
  const [searchWord, setSearchWord] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return
    const file = e.currentTarget.files[0]
    setImageFile(file)
    setResponse(undefined)

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (!reader.result) return
      setImageSrc(reader.result as string)
    }
    setStatus('init')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData()

    if (imageFile) {
      formData.append('image', imageFile)
    } else {
      const file = await convertURLtoFile(imageSrc)
      formData.append('image', file)
    }

    const data = await getPlaceInferenceApi(formData)

    if (!data.label_category) {
      setStatus('error')
      return
    }

    setResponse(data)
    setSearchWord(data.label_category)
    setStatus('done')
  }

  const handleImageClick = (e: MouseEvent) => {
    setImageSrc((e.target as HTMLImageElement).src)
    closeModal()
  }

  const convertURLtoFile = async (url: string) => {
    const res = await fetch(url)
    const data = await res.arrayBuffer()
    const ext = url.split('.').pop()
    const filename = url.split('/').pop()
    const metadata = { type: `image/${ext}` }
    return new File([data], filename!, metadata)
  }

  return (
    <div className='pageContainer'>
      <Description status={status} response={response} />
      <form onSubmit={handleSubmit} className={styles.imageUploadForm}>
        <input type='file' accept='image/*' onChange={handleFileChange} ref={inputRef} id='image-input' />
        <div className={styles.imageWrapper}>
          {imageSrc ? (
            <img src={imageSrc} alt='preview' />
          ) : (
            <label htmlFor='image-input'>
              <ImageIcon />
              <span>이미지를 업로드하세요.</span>
            </label>
          )}
        </div>
        {/* {imageSrc ? (
          <Buttons status={status} inputRef={inputRef} searchWord={searchWord} />
        ) : (
          <Button value='샘플 이미지 사용하기' buttonStyle='secondary' size='fullWidth' onClick={openModal} />
        )} */}
      </form>
      {isModalOpen && (
        <Modal closeModal={closeModal} title='샘플 이미지 선택하기'>
          <ImageGrid
            imageList={SAMPLE_IMAGES}
            className='sampleImagesInModal'
            keyPrefix='sample-image'
            directory='images_en'
            inModal
            handleImageClick={handleImageClick}
          />
        </Modal>
      )}
    </div>
  )
}

export default Search
