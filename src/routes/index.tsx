import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'
import Gallery from './Gallery'
import Home from './Home'
import Invitation from './Invitation'
import Message from './Message'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='invitation' element={<Invitation />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='message' element={<Message />} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
