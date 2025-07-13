import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaShieldAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-10'>
      <hr className='border-gray-400 mb-6' />

      <div className='max-w-7xl mx-auto px-6 sm:px-10 grid sm:grid-cols-[3fr_1fr_1fr] gap-14 '>
        
        {/* Left Section */}
        <div className='flex flex-col items-center gap-4'>
          <img className='mb-5 w-28 cursor-pointer ' onClick={() => {navigate('/');scrollTo(0,0);}} src={assets.logo} alt='Medi-Connect Logo' />
          <p className='text-gray-600 leading-6'>
            Connecting patients with trusted healthcare professionals.
          </p>
        </div>

        {/* Center Section (Company) */}
        <div  className='flex flex-col items-center '>
          <p className='text-lg font-semibold mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:underline cursor-pointer flex items-center gap-2 hover:text-blue-700' onClick={() => navigate('/')}>
              <FaHome /> Home
            </li>
            <li className='hover:underline cursor-pointer flex items-center gap-2 hover:text-blue-700' onClick={() => navigate('/about')}>
              <FaInfoCircle /> About Us
            </li>
            <li className='hover:underline cursor-pointer flex items-center gap-2 hover:text-blue-700' onClick={() => navigate('/contacts')}>
              <FaPhoneAlt /> Contact Us
            </li>
            <li className='hover:underline cursor-pointer flex items-center gap-2 hover:text-blue-700' onClick={() => navigate('/privacy')}>
              <FaShieldAlt /> Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section (Get in Touch) */}
        <div className='flex flex-col items-center'>
          <p className='text-lg font-semibold mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li className='flex items-center gap-2 hover:text-blue-700'>
              <FaPhoneAlt />
              <a href="tel:+917558611333" className="hover:underline">+91-7558611333</a>
            </li>
            <li className='flex items-center gap-2 hover:text-blue-700'>
              <FaEnvelope /> 
                <a href="mailto:122vidhi4002@sjcem.edu.in" className="hover:underline">122vidhi4002@sjcem.edu.in</a>  
                </li>
            <li className='flex items-center gap-2 hover:text-blue-700'>    
                <FaEnvelope />      
                <a href="mailto:122taiyyaba4034@sjcem.edu.in" className="hover:underline">122taiyyaba4034@sjcem.edu.in</a>   
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-8'>
        <hr className='border-gray-400' />
        <p className='py-4 text-center text-gray-600 text-sm'>
          © 2025 Medi-Connect | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
