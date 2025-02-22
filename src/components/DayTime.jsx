import React, { useContext, useState, useEffect, useRef } from 'react'
import { StepperContext } from '@/context/StepperContext'
import TableBody from './TableBody'

const DayTime = () => {
    const { form } = useContext(StepperContext)
    const [isCustom, setIsCustom] = useState()
    const weekDayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const weekendArr = ['Sunday', 'Saturday']

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h3 className='text-[22px] tracking-wide font-semibold'>Day & Time :</h3>
                <button class="bg-primary_light hover:bg-primary_dark text-white font-bold  px-3 rounded-full items-end text-xs mb-2" onClick={(e) => {
                    console.log('inside')
                    e.preventDefault()
                    setIsCustom(!isCustom)
                    form.reset(Object.fromEntries(Object.keys(form.getValues()).filter(k => k.includes('schedule_')).map(k => [k, new Date()])))
                }}>
                    {isCustom ? 'Back' : 'Custom'}
                </button>
            </div>
            <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
            <div className='flex justify-center mt-5 overflow-auto rounded-lg shadow-lg max-w-full'>
                <div className='flex justify-normal md:justify-center w-[350px]'>
                    <table className='w-[300px]' >
                        <thead class="bg-primary_lighter border-b-2 border-primary_light text-white">
                            <tr>
                                <th className='text-[16px] tracking-wide font-medium border border-gray-300 dark:border-gray-600 text-primary_darkest'>Days</th>
                                <th className='text-[16px] tracking-wide font-medium border border-gray-300 dark:border-gray-600 text-primary_darkest'>Opening Time</th>
                                <th className='text-[16px] tracking-wide font-medium border border-gray-300 dark:border-gray-600 text-primary_darkest'>Closing Time</th>
                            </tr>
                        </thead>
                        {isCustom == true ? <TableBody daysArr={weekDayArr.concat(weekendArr)} form={form} /> : <TableBody daysArr={['Mon - Fri', 'Sat - Sun']} form={form} />}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DayTime