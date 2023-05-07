import { Outlet } from 'react-router-dom'
import GNB from './GNB'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <>
      <GNB />
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      {/* TODO: footer 추가 */}
    </>
  )
}

export default Layout
