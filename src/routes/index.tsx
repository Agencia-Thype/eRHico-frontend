import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FranchisingPage from '../pages/FranchisingPage'


const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/franquia" element={<FranchisingPage />} />
    </Routes>
  )
}

export default RoutesComponents