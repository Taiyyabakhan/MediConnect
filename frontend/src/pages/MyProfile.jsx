import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('personal')
  const [isEditing, setIsEditing] = useState(false)
  
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    gender: 'Male',
    address: '123 Healthcare Ave, Medical City, MC 12345',
    emergencyContact: 'Jane Doe - +1 (555) 987-6543',
    bloodType: 'O+',
    allergies: 'Penicillin, Peanuts',
    medicalConditions: 'Hypertension, Type 2 Diabetes'
  })

  const [appointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2025-03-15',
      time: '10:30 AM',
      status: 'upcoming',
      type: 'In-person'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2025-02-28',
      time: '2:00 PM',
      status: 'completed',
      type: 'Video Consultation'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      date: '2025-03-20',
      time: '11:15 AM',
      status: 'upcoming',
      type: 'In-person'
    }
  ])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Profile updated:', profileData)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original values (in real app, you'd store original values)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and medical records</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-gray-600">{profileData.email}</p>
              <p className="text-sm text-gray-500 mt-1">Patient ID: #MC2025001</p>
            </div>
            <div className="text-right">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['personal', 'appointments', 'medical', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'personal' ? 'Personal Information' : 
                 tab === 'appointments' ? 'Appointments' :
                 tab === 'medical' ? 'Medical History' : 'Settings'}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Personal Information Tab */}
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profileData.dateOfBirth}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={profileData.emergencyContact}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              
              {isEditing && (
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment History</h3>
              
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{appointment.date}</span>
                          <span>{appointment.time}</span>
                          <span className="capitalize">{appointment.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          appointment.status === 'upcoming' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => navigate('/doctors')}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book New Appointment
              </button>
            </div>
          )}

          {/* Medical History Tab */}
          {activeTab === 'medical' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                  <input
                    type="text"
                    name="bloodType"
                    value={profileData.bloodType}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                  <textarea
                    name="allergies"
                    value={profileData.allergies}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    placeholder="List any known allergies"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                <textarea
                  name="medicalConditions"
                  value={profileData.medicalConditions}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  placeholder="List any chronic medical conditions"
                />
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Medical Information</h4>
                <p className="text-sm text-yellow-700">
                  Keep your medical information up to date. This information helps healthcare providers provide better care and avoid potential complications.
                </p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Receive appointment reminders and updates</p>
                  </div>
                  <button className="bg-blue-600 relative inline-flex h-6 w-11 items-center rounded-full">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                    <p className="text-sm text-gray-500">Get text messages for urgent updates</p>
                  </div>
                  <button className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Enable
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium text-gray-900">Privacy Settings</h4>
                    <p className="text-sm text-gray-500">Control who can see your medical information</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Manage
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyProfile