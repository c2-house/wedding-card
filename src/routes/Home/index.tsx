import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

import styles from './home.module.scss'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.homepage}>
      <div className={styles.banner}>
        <div className={styles.infoText}>
          <div>
            신랑 <span>정민채</span> & 신부 <span>고은채</span>
          </div>
          <p>
            2023. 6. 10 (토) 오후 4시
            <br />
            아펠가모 공덕 7층 마리에홀
          </p>
        </div>
      </div>
      <p className={styles.inviteText}>
        민채와 은채의 결혼식에
        <br />
        소중한 분들을 초대합니다.
      </p>
      <div className={styles.buttonWrapper}>
        <Button text='청첩장 보기' size='fullWidth' onClick={() => navigate('/invitation')} />
      </div>
    </div>
  )
}

export default Home
