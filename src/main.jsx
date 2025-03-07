import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import DoctorInfo from './pages/DoctorInfo'
import AppointmentDetails from './components/AppointmentDetails'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/register-clinic' element={<RegisterForm/>}/>
          <Route path='/register-hospital' element={<RegisterForm/>}/>
          <Route path='/doctor-info/:docId' element={<DoctorInfo/>}/>
          <Route path='/appointment-details' element={<AppointmentDetails/>}/>
      </Routes>
  </BrowserRouter>,
)
