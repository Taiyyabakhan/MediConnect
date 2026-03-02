import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About MediConnect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between patients and healthcare providers through innovative technology
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To make quality healthcare accessible to everyone by connecting patients with the right doctors seamlessly. 
              We strive to eliminate barriers in healthcare access through technology, ensuring that medical care is 
              just a click away for everyone, regardless of their location or circumstances.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted healthcare platform that revolutionizes how patients and doctors interact. 
              We envision a future where healthcare is proactive, personalized, and easily accessible to all, 
              powered by cutting-edge technology and compassionate care.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Connect with certified and experienced healthcare professionals across various specializations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Appointments</h3>
              <p className="text-gray-600">Book appointments online at your convenience with real-time availability and instant confirmations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your health information is protected with industry-standard security and privacy measures</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Expert Doctors</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We are a dedicated team of healthcare professionals, technologists, and innovators 
            committed to transforming the healthcare experience for everyone.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Chief Medical Officer</p>
              <p className="text-sm text-gray-500">15+ years of experience in internal medicine</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-500">Tech entrepreneur passionate about healthcare innovation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Emily Rodriguez</h3>
              <p className="text-gray-600 mb-2">Head of Operations</p>
              <p className="text-sm text-gray-500">Expert in healthcare management and patient experience</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white text-lg mb-6">
            Have questions about our services? We'd love to hear from you.
          </p>
          <button 
            onClick={() => navigate('/contacts')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default About