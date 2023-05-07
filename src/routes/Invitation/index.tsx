import BankAccount from './components/BankAccount'
import Calendar from './components/Calendar'
import Location from './components/Location'
import Welcome from './components/Welcome'

const Invitation = () => {
  return (
    <>
      <Welcome />
      <Location />
      <Calendar />
      <BankAccount />
    </>
  )
}

export default Invitation
