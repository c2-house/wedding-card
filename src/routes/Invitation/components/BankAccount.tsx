import Button from 'components/Button'
import Modal from 'components/Modal'
import { useModal } from 'hooks/useModal'
import { MouseEvent, useState } from 'react'
import styles from './bankAccount.module.scss'

const side = {
  bride: '신부측',
  groom: '신랑측',
}

type Side = typeof side[keyof typeof side]

interface Account {
  person: string
  name: string
  bank: string
  account: string
}

const accounts: Record<keyof typeof side, Account[]> = {
  groom: [
    {
      person: '신랑',
      name: '정민채',
      bank: '카카오뱅크',
      account: '3333-03-0753949',
    },
    {
      person: '어머니',
      name: '최은진',
      bank: '신한은행',
      account: '110-088-646130',
    },
  ],
  bride: [
    {
      person: '신부',
      name: '고은채',
      bank: '우리은행',
      account: '1002-041-422095',
    },
    {
      person: '아버지',
      name: '고용식',
      bank: '우리은행',
      account: '1002-041-422095',
    },
    {
      person: '어머니',
      name: '김성희',
      bank: '우리은행',
      account: '1002-041-422095',
    },
  ],
}

const BankAccount = () => {
  const [selected, setSelected] = useState<Side>(side.groom)
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLButtonElement).value as Side)
    openModal()
  }

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const text = (e.target as HTMLButtonElement).value
    navigator.clipboard.writeText(text)
  }

  return (
    <section>
      <h2>마음 전하실 곳</h2>
      <div className={styles.buttonWrapper}>
        <Button text={side.groom} value={side.groom} size='fullWidth' buttonStyle='secondary' onClick={handleClick} />
        <Button text={side.bride} value={side.bride} size='fullWidth' buttonStyle='secondary' onClick={handleClick} />
      </div>
      {isModalOpen && (
        <Modal title={selected === side.groom ? side.groom : side.bride} closeModal={closeModal}>
          {accounts[selected === side.groom ? 'groom' : 'bride'].map((account) => (
            <div key={account.name} className={styles.accountItem}>
              <div>
                <div>
                  {account.person} <span>{account.name}</span>
                </div>
                <div className={styles.account}>
                  {account.bank} {account.account}
                </div>
              </div>
              {/* TODO: 복사하면 체크 아이콘으로 변경 */}
              <Button
                text='복사'
                value={`${account.bank} ${account.account}`}
                size='small'
                buttonStyle='ghost'
                onClick={handleCopy}
              />
            </div>
          ))}
        </Modal>
      )}
    </section>
  )
}

export default BankAccount
