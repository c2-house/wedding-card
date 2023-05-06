import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'
import Home from './Home'
import Invitation from './Invitation'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='invitation' element={<Invitation />} />
        <Route path='message' element={<>aa</>} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
