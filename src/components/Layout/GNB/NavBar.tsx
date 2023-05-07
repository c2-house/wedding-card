import cx from 'classnames'
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

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        {navList.map((item) => (
          <li key={`gnb-item-${item.title}`}>
            <NavLink to={item.to} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
