import { FormEvent, MouseEvent, useEffect, useState } from 'react'

import { useScrollTo } from 'hooks/useScrollTo'
import { getMessages, MessageBody, MessageDTO, postMessage } from 'services/message'
import { useModal } from 'hooks/useModal'
import MessageModal from './MessageModal'
import Button from 'components/Button'
import { ReactComponent as DeleteIcon } from 'assets/icons/close.svg'
import styles from './message.module.scss'

const Message = () => {
  const [messages, setMessages] = useState<MessageDTO[]>([])
  const [formData, setFormData] = useState<MessageBody>({
    name: '',
    password: '',
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedId, setSelectedId] = useState<number>(0)
  const { isModalOpen, openModal, closeModal } = useModal()

  useScrollTo(0, 0)

  useEffect(() => {
    getMessages().then(setMessages)
  }, [])

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setErrorMessage('이름을 입력해주세요.')
    } else if (!formData.password || formData.password.length < 4) {
      setErrorMessage('비밀번호는 4자리 이상이어야 합니다.')
    } else if (!formData.description.trim()) {
      setErrorMessage('메시지를 입력해주세요.')
    } else {
      postMessage(formData).then((data) => {
        setMessages((prev) => [data, ...prev])
      })
      setFormData({ name: '', password: '', description: '' })
      setErrorMessage('')
    }
  }

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedId(Number(e.currentTarget.value))
    openModal()
  }

  return (
    <section>
      <h2>방명록</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            placeholder='이름'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='비밀번호'
            autoComplete='off'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <textarea
          name='description'
          placeholder='축하 메시지를 남겨주세요.'
          autoComplete='off'
          maxLength={200}
          value={formData.description}
          onChange={handleChange}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button type='submit' text='등록' />
      </form>
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.messageItem}>
            <div className={styles.messageHeader}>
              <div>
                <span>{message.name}</span>
                <span>{message.created_at.slice(0, 10)}</span>
              </div>
              <button type='button' value={message.id} onClick={handleDeleteClick}>
                <DeleteIcon />
              </button>
            </div>
            <p>{message.description}</p>
          </li>
        ))}
      </ul>
      {isModalOpen && <MessageModal selectedId={selectedId} setMessages={setMessages} closeModal={closeModal} />}
    </section>
  )
}

export default Message
