import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  
  // Fetch doctor information
  const fetchDocInfo = async () => {
    if (!doctors || doctors.length === 0) {
      console.error("Doctors data is missing or empty!");
      return;
    }

    const docInfo = doctors.find(doc => doc._id === docId);
    if (docInfo) {
      setDocInfo(docInfo);
      console.log("Fetched Doctor Info:", docInfo);
    } else {
      console.error("Doctor not found with ID:", docId);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  // Generate available slots
  const getAvailableSlots = async () => {
    setDocSlot([]);
    let today = new Date();
    let timeSlots = [];

    for (let i = 0; i < 7; i++) {
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i); // Set end time to the next day
      endTime.setHours(21, 0, 0, 0); // Set end time to 9 PM

      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10);
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0); // Set start time to current hour + 1
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0); // Set start time to 10 AM
      }

      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          dateTime: new Date(currDate),
          time: formattedTime
        });

        currDate.setMinutes(currDate.getMinutes() + 30); // Increment by 30 minutes
        setDocSlot(prevSlots => [...prevSlots,timeSlots.slice(0, i === 0 ? 15 : 22)]);

      }
    }

     // Set the generated slots
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log("Available Slots:", docSlot);
  }, [docSlot]);

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={docInfo.image} alt={docInfo.name} className='bg-primaryColor bg-opacity-90 w-full sm:w-72 rounded-lg' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg px-10 py-7 bg-white mx-1 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Doctor Info */}
          <p className='flex items-center gap-3 text-lg font-medium text-gray-900'>{docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt=''/>
          </p>
          <div className='flex items-center gap-4 text-gray-600 text-sm mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full hover:text-white hover:bg-primaryColor hover:bg-opacity-90 hover:scale-110 transition-all duration-500'>{docInfo.experience}</button>
          </div>

          {/* About Section */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About 
              <img src={assets.info_icon} alt=''/>
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          
          <p className='to-gray-500 font-medium mt-4'>
            Appointment Fees: <span className='text-primaryColor'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
