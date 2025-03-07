import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import doctor from '../assets/doc1.jpg'
import hosp_image1 from '../assets/hosp_image1.jpg'
import hosp_image2 from '../assets/hosp_image2.jpg'
import hosp_image4 from '../assets/hosp_image4.jpg'
import hosp_image5 from '../assets/hosp_image5.jpg'
import hosp_image6 from '../assets/hosp_image6.jpg'
import CustomTable from '@/components/CustomTable';
import CustomTab from '@/components/CustomTab';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Navbar from '@/components/Navbar';

const ChildElement = ({ timeline, setTimeline }) => {

  const handleChange = (event) => {
    setTimeline(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={'daily'}
          value={timeline}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'green', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'green', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'red', // Border color when focused
              },
            }
          }}
          onChange={handleChange}
        >
          <MenuItem value='daily'>Daily</MenuItem>
          <MenuItem value='monthly'>Monthly</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
const DoctorInfo = () => {
  const { docId } = useParams()
  const navigate = useNavigate()
  const [timeline, setTimeline] = React.useState('daily');
  const dailyData = [{ day: '10 mon', totalPatients: 23 },
  { day: '11 tue', totalPatients: 45 },
  { day: '12 wed', totalPatients: 67 },
  { day: '13 thu', totalPatients: 34 },
  { day: '14 fri', totalPatients: 29 },
  { day: '15 sat', totalPatients: 78 },
  { day: '16 sun', totalPatients: 56 },
  { day: '17 mon', totalPatients: 88 },
  { day: '18 tue', totalPatients: 50 },
  { day: '19 wed', totalPatients: 72 },
  { day: '20 thu', totalPatients: 61 },
  { day: '21 fri', totalPatients: 35 },
  { day: '22 sat', totalPatients: 90 },
  { day: '23 sun', totalPatients: 42 },
  { day: '24 mon', totalPatients: 60 },
  { day: '25 tue', totalPatients: 81 },
  { day: '26 wed', totalPatients: 33 },
  { day: '27 thu', totalPatients: 22 },
  { day: '28 fri', totalPatients: 66 },
  { day: '29 sat', totalPatients: 77 }
  ]
  const dailyDataHeader = ['Day', 'Total patients']
  const monthDataHeader = ['Month', 'Total patients']
  const monthData = [
    { month: "January", totalPatients: 300 },
    { month: "February", totalPatients: 250 },
    { month: "March", totalPatients: 400 },
    { month: "April", totalPatients: 350 },
    { month: "May", totalPatients: 500 },
    { month: "June", totalPatients: 450 },
    { month: "July", totalPatients: 600 },
    { month: "August", totalPatients: 550 },
    { month: "September", totalPatients: 500 },
    { month: "October", totalPatients: 700 },
    { month: "November", totalPatients: 650 },
    { month: "December", totalPatients: 550 }
  ];
  const [overallData, setOverallData] = useState(dailyData)
  const [overallDataHeader, setOverallDataHeader] = useState(dailyDataHeader)
  useEffect(() => {
    if (timeline == 'monthly') {
      setOverallData(monthData)
      setOverallDataHeader(monthDataHeader)
    } else {
      setOverallData(dailyData)
      setOverallDataHeader(dailyDataHeader)
    }
  }, [timeline])
  const patientData = [
    { no: 1, name: "John Doe", time: "05:30 AM", action: "done" },
    { no: 2, name: "Jane Smith", time: "06:00 AM", action: "pending" },
    { no: 3, name: "Alice Brown", time: "06:30 AM", action: "done" },
    { no: 4, name: "Bob White", time: "07:00 AM", action: "pending" },
    { no: 5, name: "Charlie Green", time: "07:30 AM", action: "done" },
    { no: 6, name: "David Black", time: "08:00 AM", action: "pending" },
    { no: 7, name: "Eva Adams", time: "08:30 AM", action: "done" },
    { no: 8, name: "Frank Hill", time: "09:00 AM", action: "pending" },
    { no: 9, name: "Grace Lee", time: "09:30 AM", action: "done" },
    { no: 10, name: "Henry Clark", time: "10:00 AM", action: "pending" },
    { no: 11, name: "Isla Scott", time: "10:30 AM", action: "done" },
    { no: 12, name: "Jack Turner", time: "11:00 AM", action: "pending" },
    { no: 13, name: "Kimberly White", time: "11:30 AM", action: "done" },
    { no: 14, name: "Leo King", time: "12:00 PM", action: "pending" },
    { no: 15, name: "Mia Evans", time: "12:30 PM", action: "done" }
  ];

  patientData.forEach(data => {
    data.action = data.action == 'done' ? <HowToRegIcon sx={{ color: 'green' }} /> : <PendingActionsIcon sx={{ color: 'red' }} />
  })


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 220;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 220;
  };
  return (
    <><Navbar />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col md:flex-row md:gap-10 gap-3  pt-10'>
          <div className='flex w-[250px] md:w-[500px] bg-white border border-gray-200 rounded-lg shadow-sm flex-col md:flex-row h-[340px] md:h-48 mt-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 items-center md:items-start'>
            <img
              src={doctor}
              alt="card-image"
              class="w-[180px] rounded-t-lg h-full  md:rounded-none md:rounded-s-lg"
            />
            <div class="flex flex-col pl-8 items-center md:items-start pt-8 md:pt-3  leading-normal w-[400px]">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
              <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
              <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
            </div>
          </div>
          <div class="md:border-l md:border-gray-300 md:h-52"></div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className='flex flex-col w-[300px]'>
            <h5 class="mb-2 text-lg font-medium  text-gray-900">Address</h5>
            <p class="mb-3 font-normal text-gray-700 text-[14px]">John Doe 1234 Elm Street Springfield, IL 62704 United States</p>
            <h5 class="mb-2 text-lg font-medium  text-gray-900">Services</h5>
            <ul class=" list-disc list-inside">
              <li className='text-[14px]'>service 1</li>
              <li className='text-[14px]'>service 2</li>
              <li className='text-[14px]'>service 3</li>
            </ul>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className='flex items-center '>
          <div className='flex w-[280px] md:w-[950px]'>
            {/* test */}
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 mt-[66px]' onClick={slideLeft} size={40} />
            <div
              id='slider'
              className='w-full h-full scroll whitespace-nowrap scroll-smooth scrollbar-hide overflow-hidden'
            >

              <img
                src={hosp_image1}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <img
                src={hosp_image2}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <img
                src={hosp_image4}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <img
                src={hosp_image1}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <img
                src={hosp_image5}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <img
                src={hosp_image6}
                alt="card-image"
                className='w-[220px] h-[160px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 mt-[66px]' onClick={slideRight} size={40} />
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
        <div className='flex items-center flex-col'>
          <h3 class="hidden md:flex text-3xl font-bold dark:text-white">Appointment Details</h3>
          <button
            className="flex md:hidden px-4 py-1 mt-3 bg-primary_light
                       text-white rounded-lg tracking-[4px]"
            onClick={
              () => navigate('/appointment-details')
            }
          >
            Appointment Details
          </button>
          <div className='hidden md:flex flex-row mt-6 '>
            <CustomTab tab1={<CustomTable data={patientData} headers={['No', 'Name', 'Time', 'Action']} timeline='' />} tab2={<CustomTable data={overallData} headers={overallDataHeader} timeline={timeline} />} childElement={<ChildElement timeline={timeline} setTimeline={setTimeline} />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorInfo