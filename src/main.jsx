import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { api } from './state/api'
import { Provider } from 'react-redux'
const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer
  },
  middleware:(getDefault) => getDefault().concat(api.middleware)
})
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    {/* <App /> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register-clinic' element={<RegisterForm/>}/>
          <Route path='/register-hospital' element={<RegisterForm/>}/>
      </Routes>
  </BrowserRouter>
  </Provider>
  ,
)
