import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets_frontend/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate=useNavigate();
  const [showMenu,setshowMenu]=useState(false)
  const [token,setToken]=useState(false) //user logged in=>true

  // Check localStorage for token on component mount and listen for changes
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem('token')
      setToken(storedToken === 'true')
    }

    // Initial check
    checkToken()

    // Listen for storage changes (for cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key === 'token') {
        checkToken()
      }
    }

    // Also listen for custom events (for same-tab updates)
    const handleTokenChange = () => {
      checkToken()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('tokenChanged', handleTokenChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('tokenChanged', handleTokenChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(false)
  }

  return (
    <div className='flex items-center justify-between text-sm py-2 mb-4 bg-background border-b  border-b-gray-600   '>
        <img src={assets.logo} alt="logo" onClick={()=>navigate('/')} className="w-20 h-auto cursor-pointer" />
        <ul className="flex items-center gap-5 font-medium">
        <NavLink to="/">
            <li className='py-1'>Home</li>
            <hr className=' hidden'/>
            </NavLink>
            <NavLink to="/doctors">
            <li className='py-1'>All Doctors</li>
            <hr className='hidden'/>
            </NavLink>
            <NavLink to="/about">
            <li className='py-1'>About</li>
            <hr className=' hidden'/>
            </NavLink>
            <NavLink to="/contacts">
            <li className='py-1'>Contact</li>
            <hr className='hidden'/>
            </NavLink>

        </ul>
        <div className='flex items-center gap-4'>
          {
            //if token is true=> token?execute:else do this
            token?
            <div className='flex gap-2 cursor-pointer group relative'>
              <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <img className='w-2.5 ' src={assets.dropdown_icon} alt=''/>
              <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='flex flex-col p-2 mt-2 g-4 bg-stone-50 min-w-48 rounded'>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
                  
                </div>
              </div>
            </div>:
            <button onClick={()=>{navigate('/login')}} className='bg-primaryColor text-white  px-6 py-3 rounded-full font-light hidden md:block'>Create Account</button>

          }
            
        </div>
    </div>
  )
}

export default NavBar