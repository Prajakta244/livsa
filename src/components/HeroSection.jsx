import React from 'react'
import patient from '../assets/patient.jpg'
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
            <div class='flex justify-around items-center flex-col 1084:flex-col 1220:flex-row 1084:items-center 1220:items-stretch md:mt-10'>
                <div class=" flex justify-center flex-row  my-6 bg-white shadow-sm border border-slate-200 rounded-3xl w-[350px] md:w-[500px]" >
                    <div class=" p-2.5 xl:w-2/5 shrink-0 overflow-hidden">
                        <img
                            src={patient}
                            alt="card-image"
                            class="h-[150px] w-[150px]   rounded-lg xl:rounded-lg object-cover sm:w-[200px]"
                        />
                    </div>
                    <div class="md:p-6 p-3 hover:bg-primaryGrad rounded-lg" onClick={() => navigate('/doctors')} >
                        <h3 class="mb-2 text-slate-800 text-lg font-semibold">
                            For Patients
                        </h3>
                        <p class="mb-8 md:text-[17px] text-[13px] text-slate-600 leading-normal font-light ">
                            Simplifying your search for trusted doctors and easy appointment bookings.
                        </p>
                    </div>
                </div>
                <div class=" flex flex-row  my-6 bg-white shadow-sm border border-slate-200 rounded-3xl w-[350px] md:w-[500px]">
                    <div class=" p-2.5 xl:w-2/5 shrink-0 overflow-hidden">
                        <img
                            src={doctor}
                            alt="card-image"
                            class="h-[150px] w-[150px] rounded-lg xl:rounded-lg object-cover sm:w-[200px]"
                        />
                    </div>
                    <div class="md:p-6 p-3 hover:bg-primaryGrad rounded-lg" onClick={() => navigate('/register')}>
                        <h3 class="mb-2 text-slate-800 text-xl font-semibold">
                            For Doctors
                        </h3>
                        <p class="mb-8 md:text-[17px] text-[13px] text-slate-600 leading-normal font-light">
                            Expand your reach and manage appointments seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection