import React from 'react'
import hero_doc from '../assets/hero_doc.jpg'
import { slideLeft, slideRight } from '@/utility/animation'
import { motion } from 'framer-motion'

const HeroDoctors = () => {
    return (
        <>
            <section>
                <div className='flex justify-center items-center'>
                    {/* md:px-16 md:mx-[113px] */}
                    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[450px] relative md:gap-1">
                        <div className='flex flex-col py-8 md:py-0 '>
                            <div className='space-y-6 font-playfair'>
                                <motion.h1 variants={slideLeft(0.6)} initial='hidden' animate='visible' className='text-center md:text-left  text-5xl font-bold leading-relaxed mt-5'>Simplifying Healthcare Access with Effortless <span className='text-primary'>Appointments</span></motion.h1>
                                {/* <motion.ul variants={slideRight(1.2)} initial='hidden' animate='visible' className='list-disc pl-10 text-gray-600'>
                                <li>No waiting in hospital lines.</li>
                                <li>Rs. 1 for booking.</li>
                                <li>Choose your hospital timing.</li>
                                <li>Waiting time <span>25 min</span> 0 min.</li>
                                <li>We cut patient time from 25 to 5 minutes.</li>
                                <li>In and out of the hospital in 5 minutes.</li>
                            </motion.ul> */}
                            </div>
                        </div>
                        <div className='flex md:pt-8 pt-2 justify-center'>
                            <motion.img
                                initial={{ opacity: 0, x: 100, rotate: 90 }}  // Start with opacity 0, 100px to the right, and rotated 180 degrees
                                animate={{ opacity: 1, x: 0, rotate: 0 }}     // End with opacity 1, at the normal position, and no rotation
                                transition={{ duration: 1, delay: 1 }}                   // Optional transition duration
                                style={{ willChange: 'auto', transform: 'none' }}
                                src={hero_doc}
                                alt="card-image"
                                class="w-[350px] md:w-[550px] h-fit drop-shadow-2xl rounded-bl-full"
                            />
                            {/* test */}
                        </div>
                        <div className='flex justify-start'>
                            <motion.ul variants={slideRight(1.2)} initial='hidden' animate='visible' className='list-disc pl-10 text-gray-600'>
                                <li>No waiting in hospital lines.</li>
                                <li>Rs. 1 for booking.</li>
                                <li>Choose your hospital timing.</li>
                            </motion.ul>
                        </div>
                        <div className='flex justify-end'>
                            <motion.ul variants={slideLeft(1.2)} initial='hidden' animate='visible' className='list-disc pl-10 text-gray-600'>
                                <li>Waiting time <span>25 min</span> 0 min.</li>
                                <li>We cut patient time from 25 to 5 minutes.</li>
                                <li>In and out of the hospital in 5 minutes.</li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroDoctors