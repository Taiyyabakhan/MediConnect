import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='bg-primaryColor flex flex-col md:flex-row flex:wrap rounded-2xl px-6 md:px-10'>
        {/* Left_Side_Of_Header */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-6 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight leading-light'>Book Appointment <br/>With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light '>
                <img className='w-24' src={assets.group_profiles} alt=''/>
                <p>Simply browse through our extensive list of trusted doctors,<br className='hidden md:block'/>schedule your appointment hassle-free.</p>
            </div>
            <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:bg-secondaryColor hover:text-gray-300 hover:scale-105 transition-all duration-300' href="#speciality">
                Book Appointment 
                <img className='w-3 ' src={assets.arrow_icon} alt=''/>
            </a>

        </div>
        {/* Right_Side_Of_Header */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 rounded-1g h-auto' src={assets.header_img} alt=''/>
        </div>
    </div>
  )
}

export default Header