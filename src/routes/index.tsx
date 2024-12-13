import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FranchisingPage from '../pages/FranchisingPage'
import ServicePage from '../pages/ServicePage'
import ContactPage from '../pages/ContactPage'


const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/franquia" element={<FranchisingPage />} />
        <Route path="/servicos" element={<ServicePage />} />
        <Route path="/contato" element={<ContactPage />} />
    </Routes>
  )
}

export default RoutesComponents