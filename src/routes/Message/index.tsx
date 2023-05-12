import { FormEvent, useState } from 'react'

import { useScrollTo } from 'hooks/useScrollTo'
import Button from 'components/Button'
import styles from './message.module.scss'

interface FormData {
  name: string
  password: string
  description: string
}

const Message = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    password: '',
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  useScrollTo(0, 0)

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
      setErrorMessage('')
      // TODO: submit
    }
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
          value={formData.description}
          onChange={handleChange}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button type='submit' text='등록' />
      </form>
    </section>
  )
}

export default Message
