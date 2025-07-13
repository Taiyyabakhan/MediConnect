import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/appContext';
import {useNavigate, useParams} from 'react-router-dom'
const Doctors = () => {
  const {speciality}=useParams()
  const {doctors} =useContext(AppContext)
  const navigate=useNavigate()
  const [filterDoc, setFilterDoc] = useState([])

  const applyFilter=()=>{
    if (speciality) {
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterDoc(doctors)
    }
 
  }


  useEffect(()=>{
    applyFilter();
},[doctors,speciality]);

  return (
    <div >
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col  sm:flex-row items-start gap-8 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality?.toLowerCase() === "gynecologist" ? navigate("/doctors") : navigate("/doctors/Gynecologist")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-containerColor text-white" : ""}`}>Gynecologist</p>
          <p onClick={() => speciality?.toLowerCase() === "general physician" ? navigate("/doctors") : navigate("/doctors/General physician")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "General physician" ? "bg-containerColor text-white" : ""}`}>General Physician</p>
          <p onClick={() => speciality?.toLowerCase() === "dermatologist" ? navigate("/doctors") : navigate("/doctors/Dermatologist")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-containerColor text-white" : ""}`}>Dermatologist</p>
          <p onClick={() => speciality?.toLowerCase() === "pediatricians" ? navigate("/doctors") : navigate("/doctors/Pediatricians")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-containerColor text-white" : ""}`}>Pediatologist</p>
          <p onClick={() => speciality?.toLowerCase() === "neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-containerColor text-white" : ""}`}>Neurologist</p>
          <p onClick={() => speciality?.toLowerCase() === "gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")} className={`w-[94vw] sm:w-auto px-3 py-1.5 border border-gray-300 rounded-md hover:scale-105 duration-500 transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-containerColor text-white" : ""}`}>Gastroenterologist</p>

        </div>
       <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {
            filterDoc.map((doctor,index)=>(
              <div onClick={()=>navigate(`/appointment/${doctor._id}`)} className=' border border-blue-200 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] translation-all duration-500' key={index}>
                    <img className='bg-blue-50' src={doctor.image} alt={doctor.name} />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-center text-green-500'><p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p></div>
                        <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                        <p className='text-gray-600 text-sm '>{doctor.speciality}</p>
                    </div>
                </div>
            )

            )
          }
        </div>  
       
      </div>
      
    </div>
  )
}

export default Doctors