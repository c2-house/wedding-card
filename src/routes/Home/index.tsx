import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { postCount } from 'services/home'
import { useScrollTo } from 'hooks/useScrollTo'
import Button from 'components/Button'
import styles from './home.module.scss'

const Home = () => {
  const navigate = useNavigate()
  useScrollTo(0, 0)

  useEffect(() => {
    postCount()
  }, [])

  return (
    <div className={styles.homepage}>
      <div className={styles.banner}>
        <div className={styles.infoText}>
          <div className={styles.fadeIn} style={{ animationDelay: '100ms' }}>
            신랑 <span>정민채</span> & 신부 <span>고은채</span>
          </div>
          <p className={styles.fadeIn} style={{ animationDelay: '300ms' }}>
            2023. 6. 10 (토) 오후 4시
            <br />
            아펠가모 공덕 7층 마리에홀
          </p>
        </div>
      </div>
      <p className={cx(styles.inviteText, styles.fadeIn)} style={{ animationDelay: '500ms' }}>
        민채와 은채의 결혼식에
        <br />
        소중한 분들을 초대합니다.
      </p>
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.fadeIn}
          style={{ animationDelay: '700ms' }}
          text='청첩장 보기'
          size='fullWidth'
          onClick={() => navigate('/invitation')}
        />
      </div>
    </div>
  )
}

export default Home
