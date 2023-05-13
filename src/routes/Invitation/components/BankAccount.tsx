import { MouseEvent, useEffect, useState } from 'react'

import { useModal } from 'hooks/useModal'
import Modal from 'components/Modal'
import Button from 'components/Button'
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg'
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
      bank: 'SC제일은행',
      account: '110-20-457947',
    },
    {
      person: '어머니',
      name: '김성희',
      bank: 'SC제일은행',
      account: '304-20-104621',
    },
  ],
}

const BankAccount = () => {
  const [selectedSide, setSelectedSide] = useState<Side>(side.groom)
  const [copiedPerson, setCopiedPerson] = useState('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    return () => setCopiedPerson('')
  }, [isModalOpen])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedSide((e.target as HTMLButtonElement).value as Side)
    openModal()
  }

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const { id, value } = e.target as HTMLButtonElement
    navigator.clipboard.writeText(value)
    setCopiedPerson(id)
  }

  return (
    <section>
      <h2>마음 전하실 곳</h2>
      <div className={styles.buttonWrapper}>
        <Button text={side.groom} value={side.groom} size='fullWidth' buttonStyle='secondary' onClick={handleClick} />
        <Button text={side.bride} value={side.bride} size='fullWidth' buttonStyle='secondary' onClick={handleClick} />
      </div>
      {isModalOpen && (
        <Modal title={selectedSide === side.groom ? side.groom : side.bride} closeModal={closeModal}>
          {accounts[selectedSide === side.groom ? 'groom' : 'bride'].map((account) => (
            <div key={account.name} className={styles.accountItem}>
              <div>
                <div>
                  {account.person} <span>{account.name}</span>
                </div>
                <div className={styles.account}>
                  {account.bank} {account.account}
                </div>
              </div>
              {account.name === copiedPerson ? (
                <CheckIcon />
              ) : (
                <Button
                  id={account.name}
                  text='복사'
                  value={`${account.bank} ${account.account}`}
                  size='small'
                  buttonStyle='ghost'
                  onClick={handleCopy}
                />
              )}
            </div>
          ))}
        </Modal>
      )}
    </section>
  )
}

export default BankAccount
