import React from 'react'
import Navbar from '@/components/Navbar'
import HeroDoctors from '@/components/HeroDoctors'
import bg_gradient from '../assets/bg_gradient.jpg'
import {motion} from'framer-motion'
import Search from '@/components/search'
import DoctorsList from '@/components/DoctorsList'

const bgStyle = {
    backgroundImage: `url(${bg_gradient})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
}

const Doctors = () => {
    return (
        <div className='overflow-x-hidden'>
            <div>
                <Navbar />
                <HeroDoctors />
                <Search/>
                <DoctorsList/>
            </div>
        </div>
    )
}

export default Doctors