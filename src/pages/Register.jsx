import React from 'react'
import clinic from '../assets/clinic.png'
import hospital from '../assets/hospital.png'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div class="flex flex-col items-center mt-10 lg:mt-2 max-w-7xl mx-auto md:pt-52 pt-40 md:px-20 px-10">
                <h1 class="text-[25px] sm:text-3xl lg:text-5xl text-center tracking-wide">
                    Because every patient deserves a  <br />
                    <span class='text-primary '>
                        {' '} Doctor{' '}
                    </span>
                    like you.
                </h1>
                <p class='hidden sm:block mt-10 text-lg text-center text-neutral-500 sm:m-16 '>
                    Doctors and Healthcare Leaders, join Livsa today! Register your clinic or hospital to connect with more patients, enhance your visibility, and make quality care accessible at their fingertips.
                </p>
                <p className='mb-5 mt-5 sm:mt-0 md:text-[17px] text-[13.9px]'>Please choose the category of your hospital !</p>
                <div class="flex flex-col items-center sm:mt-0 mt-10">
                    <button class="flex items-center rounded-md bg-slate-800 py-2 px-[64px] border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-primaryGrad" type="button" onClick={() => navigate('/register-clinic')}>
                        <img src={clinic}></img>
                        <p className='px-2'>Clinic</p>
                    </button>
                    <div class="w-full flex items-center justify-center relative py-8">
                        <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
                        <p className='text-lg text-primary absolute bg-[#FFFFFF] px-2'>OR</p>
                    </div>
                    <button class="flex items-center rounded-md bg-slate-800 py-2 px-10 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-primaryGrad" type="button" onClick={() => navigate('/register-hospital')}>
                        <img src={hospital}></img>
                        <p className='px-2'>Big Hospital</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Register