import React from 'react'
import LocationSearch from './LocationSearch'
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { motion } from 'framer-motion'
import { slideLeft } from '@/utility/animation';
import { FaUserDoctor } from "react-icons/fa6";

const Search = () => {
    return (
        <motion.div variants={slideLeft(1)} initial='hidden' animate='visible' className='px-[30px] py-3 max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-x-3 relative mt-8 md:shadow-lg md:backdrop-blur rounded-lg'>
            <LocationSearch icon={<HiOutlineLocationMarker size={23} />} placeholder='Select location' data={['Mumbai','Pune','Nashik','Nagpur','Delhi']} />
            <LocationSearch icon={<FaUserDoctor size={21} />} placeholder='Select speciality' data={["Cardiologist", "Dermatologist", "Neurologist", "Orthopedist", "Pediatrician", "Gynecologist", "Oncologist", "Endocrinologist", "Ophthalmologist", "Dentist", "Rheumatologist", "Psychiatrist", "Urologist", "Anesthesiologist"]}  />
            <button className='bg-primary_light hover:bg-primary_dark transition w-full md:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
                <RiSearch2Line />
            </button>
        </motion.div>
    )
}

export default Search