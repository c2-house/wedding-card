import cx from 'classnames'
import { ButtonHTMLAttributes, MouseEventHandler } from 'react'

import styles from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  value?: string
  size?: 'fullWidth' | 'large' | 'medium' | 'small'
  buttonStyle?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  text,
  value,
  size = 'medium',
  buttonStyle = 'primary',
  type = 'button',
  className,
  disabled,
  onClick,
}: IButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(styles.button, styles[size], styles[buttonStyle], className)}
      disabled={disabled}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  )
}

export default Button
