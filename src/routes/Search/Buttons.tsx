import { RefObject } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

import { useRecoil } from 'hooks/useRecoil'
import { selectedIndexState } from 'states/map'
import { TSearchStatus } from 'types/place'

import styles from './search.module.scss'

interface IProps {
  status: TSearchStatus
  inputRef: RefObject<HTMLInputElement>
  searchWord: string
}

const Buttons = ({ status, inputRef, searchWord }: IProps) => {
  const [, , resetSelectedIndex] = useRecoil(selectedIndexState)
  const navigate = useNavigate()

  const handleMapSearchClick = () => {
    navigate({ pathname: '/maps', search: `?${createSearchParams({ keyword: searchWord })}` })
    resetSelectedIndex()
  }

  const handleNewImageClick = () => inputRef.current?.click()

  return (
    <div className={styles.buttonWrapper}>
      {/* <Button
        value='다른 이미지 선택'
        buttonStyle='secondary'
        disabled={status === 'loading'}
        onClick={handleNewImageClick}
        className={styles.button}
      />
      {status === 'done' ? (
        <Button value='지도에서 찾기' onClick={handleMapSearchClick} className={styles.button} />
      ) : (
        <Button value='장소 검색' type='submit' disabled={status === 'loading'} className={styles.button} />
      )} */}
    </div>
  )
}

export default Buttons
