import React from 'react'
import { SelectItem, Select, SelectTrigger, SelectContent, SelectValue } from './ui/select'
import CustomFormField from './CustomFormField'


const LocationSearch = ({icon,placeholder,data}) => {
    return (
        <div className='flex flex-row'>
            <Select onValueChange={(date) => console.log} className='w-[260px]'>
                <SelectTrigger className='shad-select-trigger w-[300px] h-[50px] pl-10 flex items-center relative'>
                    <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
        {icon}
                    
                    </div>
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent className='shad-select-content'>
                {data.map((k) => (
                <SelectItem key={k} value={k}>
                  <div>
                    <p>{k}</p>
                  </div>
                </SelectItem>
              ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default LocationSearch