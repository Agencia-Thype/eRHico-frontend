import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FranchisingPage from '../pages/FranchisingPage'
import ServicePage from '../pages/ServicePage'


const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/franquia" element={<FranchisingPage />} />
        <Route path="/servicos" element={<ServicePage />} />
    </Routes>
  )
}

export default RoutesComponents