import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Login from './pages/login'
import Contact from './pages/contact'
import Doctors from './pages/Doctors'
import Apointment from './pages/Apointment'
import About from './pages/About'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/appointment/:docId' element={<Apointment/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointment' element={<Apointment/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>

      </Routes>
      <Footer />
      
      
    </div>
  )
}

export default App