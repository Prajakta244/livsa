import React from 'react'
import doctor from '../assets/doc1.jpg'
import {useGetDoctorsQuery} from '../state/api'

const DoctorsList = () => {
    const { data, isLoading, error, refetch } = useGetDoctorsQuery();
    console.log('data',data)
    return (
        <>
            <div className='flex justify-center items-center mt-10 shadow-2xl'>
                <div className='flex items-center justify-center min-h-screen w-full container'>
                    <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl shadow-lg'>
                            <div className='p-5 flex flex-col'>
                                <div className=' overflow-hidden'>
                                    <img
                                        src={doctor}
                                        alt="card-image"
                                        class="w-[180px] rounded-3xl h-full"
                                    />
                                </div>
                                <div class="flex flex-col items-center md:items-start pt-8 md:pt-3  leading-normal ">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Dr. Jane Doe</h5>
                                    <p class="mb-3 font-normal text-gray-700 text-[14px]">Dentist,cosmetic dentist<br />Dental surgeon</p>
                                    <p class="mb-3 text-gray-700 text-[14px] font-semibold">10 years experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorsList