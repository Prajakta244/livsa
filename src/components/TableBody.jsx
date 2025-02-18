import React, { useEffect, useState } from 'react'
import CustomFormField from './CustomFormField'
const TableBody = ({ daysArr, form }) => {
    const weekDayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const weekendArr = ['Sunday', 'Saturday']
    const [weekDayObj, setWeekDayObj] = useState(Object.assign(...weekDayArr.concat(weekendArr).map(k => ({ [k]: `${new Date().toLocaleTimeString()} - ${new Date().toLocaleTimeString()}` }))))
    useEffect(() => {
        console.log('inside useeffect')
        form.setValue('weekDayObj', weekDayObj)
        form.setValue('weekDayObj', weekDayObj)
    }, [weekDayObj])
    return (
        // <div>
        <tbody>
            {daysArr.map((k, i) => (
                <tr key={i} >
                    <>
                        <td className='py-2 border-b-[1px] border-gray-300 dark:border-gray-700'> <h3 className='text-[9.2px] md:text-[14px] md:mx-4'>{k}</h3></td>
                        <td className='border-b-[1px] border-gray-300 dark:border-gray-700'>
                            <CustomFormField
                                fieldType='date_picker'
                                control={form.control}
                                name={`schedule_${k}`}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                onChange={(date) => {
                                    if (k == 'Mon - Fri') {
                                        setWeekDayObj({
                                            ...weekDayObj, ...weekDayArr.reduce((curr, m) => {
                                                curr[m] = `${date.toLocaleTimeString()} - ${weekDayObj[m].split(' - ')[1]}`
                                                return curr
                                            }, {}
                                            )
                                        })
                                        console.log(weekDayObj)
                                    } else if (k == 'Sat - Sun') {
                                        setWeekDayObj({
                                            ...weekDayObj, ...weekendArr.reduce((curr, m) => {
                                                curr[m] = `${date.toLocaleTimeString()} - ${weekDayObj[m].split(' - ')[1]}`
                                                return curr
                                            }, {}
                                            )
                                        })
                                        console.log(date.toLocaleTimeString())
                                    }
                                    else {
                                        setWeekDayObj({ ...weekDayObj, [k]: `${date.toLocaleTimeString()} - ${weekDayObj[k].split(' - ')[1]}` })
                                    }
                                }}
                                className='text-[14px] text-center border-white '
                            />
                        </td>
                        <td className='border-b-[1px] border-gray-300 dark:border-gray-700'><CustomFormField
                            fieldType='date_picker'
                            control={form.control}
                            name={`schedule_${k}_closing`}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            onChange={(date) => {
                                if (k == 'Mon - Fri') {
                                    console.log(weekDayObj)
                                    setWeekDayObj({
                                        ...weekDayObj, ...weekDayArr.reduce((curr, m) => {
                                            curr[m] = `${weekDayObj[m].split(' - ')[0]} - ${date.toLocaleTimeString()}`
                                            return curr
                                        }, {}
                                        )
                                    })
                                } else if (k == 'Sat - Sun') {
                                    // console.log(weekDayObj)
                                    setWeekDayObj({
                                        ...weekDayObj, ...weekendArr.reduce((curr, m) => {
                                            curr[m] = `${weekDayObj[m].split(' - ')[0]} - ${date.toLocaleTimeString()}`
                                            return curr
                                        }, {}
                                        )
                                    })
                                    console.log(weekDayObj)
                                } else {
                                    setWeekDayObj({ ...weekDayObj, [k]: `${weekDayObj[k].split(' - ')[0]} - ${date.toLocaleTimeString()}` })
                                }
                            }}
                            className='text-[14px] text-center border-white '
                        /></td>
                    </>
                </tr>
            ))}
        </tbody>
        // </div>
    )
}

export default TableBody