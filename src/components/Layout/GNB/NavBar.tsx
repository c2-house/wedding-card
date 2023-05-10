import cx from 'classnames'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './gnb.module.scss'

interface INavItem {
  to: string
  title: string
}

const navList: INavItem[] = [
  {
    to: '/',
    title: '홈',
  },
  {
    to: 'invitation',
    title: '청첩장',
  },
  {
    to: 'gallery',
    title: '갤러리',
  },
  {
    to: 'message',
    title: '방명록',
  },
]

const ITEM_WIDTH = 100 / navList.length

const NavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <nav className={styles.navBar}>
      <ul>
        {navList.map((item, index) => (
          <li key={`gnb-item-${item.title}`}>
            <NavLink
              to={item.to}
              className={({ isActive }) => cx({ [styles.isActive]: isActive })}
              onClick={() => setCurrentIndex(index)}
              style={{ width: `${ITEM_WIDTH}%` }}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <span
        className={styles.indicator}
        style={{
          width: `${ITEM_WIDTH}%`,
          transform: `translateX(${currentIndex * 100}%)`,
        }}
      />
    </nav>
  )
}

export default NavBar
