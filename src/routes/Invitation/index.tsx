import Calendar from './components/Calendar'
import Welcome from './components/Welcome'
import './invitation.module.scss'

const Invitation = () => {
  return (
    <>
      <Welcome />
      <section>
        <h2>GALLERY</h2>
      </section>
      <section>
        <h2>LOCATION</h2>
      </section>
      <Calendar />
      <section>
        <h2>마음 전하실 곳</h2>
      </section>
      <section>
        <h2>방명록</h2>
      </section>
    </>
  )
}

export default Invitation
