import React from 'react'
import patient from '../assets/patient.png'
import doctor from '../assets/doctor.png'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <>
        <div class="flex flex-col items-center mt-2 lg:mt-2">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
                Livsa: Easy Appointments,
                <span class='text-primary '>
                    {' '}  Anywhere.
                </span>
            </h1>
            <p class='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Livsa makes healthcare simple and accessible. Easily search for trusted doctors, book appointments from anywhere, and take control of your health with just a few clicks. Your well-being, made effortless.
            </p>
        </div>
            <div class='flex justify-around flex-col md:flex-row'>
            <div class=" flex justify-center flex-row  my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[500px] md:w-[500px]" >
                <div class=" p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                    <img
                        src={patient}
                        alt="card-image"
                        class="h-full w-full rounded-lg md:rounded-lg object-cover sm:w-[200px]"
                    />
                </div>
                <div class="p-6 hover:bg-primaryGrad rounded-lg" >
                    <h3 class="mb-2 text-slate-800 text-xl font-semibold">
                    For Patients
                    </h3>
                    <p class="mb-8 text-slate-600 leading-normal font-light ">
                    Simplifying your search for trusted doctors and easy appointment bookings.
                    </p>
                </div>
            </div>
            <div class=" flex flex-row  my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[500px] md:w-[500px]">
                <div class=" p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                    <img
                        src={doctor}
                        alt="card-image"
                        class="h-full w-full rounded-lg md:rounded-lg object-cover sm:w-[200px]"
                    />
                </div>
                <div class="p-6 hover:bg-primaryGrad rounded-lg" onClick={() => navigate('/register')}>
                    <h3 class="mb-2 text-slate-800 text-xl font-semibold">
                    For Doctors
                    </h3>
                    <p class="mb-8 text-slate-600 leading-normal font-light">
                    Expand your reach and manage appointments seamlessly.    
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default HeroSection