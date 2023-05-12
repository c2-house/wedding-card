import { Dispatch, SetStateAction, useState } from 'react'

import { deleteMessage, MessageDTO } from 'services/message'
import Button from 'components/Button'
import Modal from 'components/Modal'
import styles from './message.module.scss'

interface Props {
  selectedId: number
  setMessages: Dispatch<SetStateAction<MessageDTO[]>>
  closeModal: () => void
}

const MessageModal = ({ selectedId, setMessages, closeModal }: Props) => {
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDelete = () => {
    deleteMessage(selectedId, password)
      .then(() => {
        setMessages((prev) => prev.filter((message) => message.id !== selectedId))
        closeModal()
      })
      .catch(() => setErrorMessage('비밀번호가 일치하지 않습니다.'))
  }

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modal}>
        <p>메시지를 삭제하시겠습니까?</p>
        <input
          type='password'
          placeholder='비밀번호를 입력하세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button text='삭제' onClick={handleDelete} />
      </div>
    </Modal>
  )
}

export default MessageModal
