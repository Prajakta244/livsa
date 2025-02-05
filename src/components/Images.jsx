import React, { useState,useContext } from 'react'
import Dropfiles from './Dropfiles'
import { StepperContext } from '../context/StepperContext'

const Images = () => {
  const { userData, setUserData, handleClick, setSchema, setFormState, form } = useContext(StepperContext)
  const [files, setFiles] = useState([])
  const [docProfile,setDocProfile] = useState([])
  return (
    <div>
      <section className='mb-4'>
        <h2 className='text-lg sm:text-xl tracking-wide'>Photos of doctor</h2>
      </section>
      <Dropfiles className='h-40 pt-8 mb-10 border border-neutral-200' setfile={setDocProfile} uplFile={docProfile} form={form} isMultifile={false} field='docProfile' />
      <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
      <section className='my-6'>
        <h2 className='text-lg sm:text-xl tracking-wide'>Photos of hospital</h2>
      </section>
      <Dropfiles className='h-40 pt-8 border border-neutral-200' setfile={setFiles} uplFile={files} form={form} isMultifile={true} field='hospImages'/>
    </div>
  )
}

export default Images
