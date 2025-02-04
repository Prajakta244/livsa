import { useContext, useState } from 'react'
import { StepperContext } from '../context/StepperContext'
import {
  Form
} from "@/components/ui/form"
import CustomFormField from './CustomFormField'
import { FaUserMd, FaPhoneAlt, FaHospital,FaBusinessTime } from "react-icons/fa";
import { MdEmail,MdMedicalServices } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import * as Yup from 'yup'
import { formSchema } from '../lib/validations'
import { specialityList } from '../constants/index'
import { SelectItem } from './ui/select'
import "react-datepicker/dist/react-datepicker.css";
const About = () => {
  const { userData, setUserData, handleClick, setSchema, setFormState, form } = useContext(StepperContext)
  // setSchema(formSchema)
  return (
    <Form {...form}>
      <form className="space-y-4 flex-1">
        <div className='mb-7'>
          <section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Personal Information</h2>
          </section>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <CustomFormField control={form.control}
              fieldType='input'
              name='name'
              label='Name'
              placeholder=''
              iconSrc={<FaUserMd className='absolute ml-2' size={15} color='grey' />}
            /><CustomFormField control={form.control}
              fieldType='input'
              name='phone_number'
              label='Phone Number'
              placeholder=''
              iconSrc={<FaPhoneAlt className='absolute ml-2' size={15} color='grey' />}
            />
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <CustomFormField control={form.control}
              fieldType='input'
              name='email'
              label='Email'
              placeholder=''
              iconSrc={<MdEmail className='absolute ml-2' size={15} color='grey' />}
            /><CustomFormField control={form.control}
              fieldType='input'
              name='qualification'
              label='Education Qualification'
              placeholder=''
              iconSrc={<PiStudentFill className='absolute ml-2' size={18} color='grey' />}
            />
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
        <div>
          <section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Clinic Details</h2>
          </section>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <CustomFormField control={form.control}
              fieldType='input'
              name='clinic'
              label='Name of hospital/clinic'
              placeholder=''
              iconSrc={<FaHospital className='absolute ml-2' size={15} color='grey' />}
            /><CustomFormField control={form.control}
              fieldType='input'
              name='clinic_number'
              label='Phone Number'
              placeholder='Hospital phone number for patient'
              iconSrc={<FaPhoneAlt className='absolute ml-2' size={15} color='grey' />}
            />
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <CustomFormField control={form.control}
              fieldType='select'
              name='speciality'
              label='Speciality'
              placeholder='Select a speciality'
            >
              {specialityList.map((specialist) => (
                <SelectItem key={specialist} value={specialist}>
                  <div>
                    <p>{specialist}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField control={form.control}
        fieldType='input'
        name='services'
        label='Major Services'
        placeholder='Major services for patients'
        iconSrc={<MdMedicalServices className='absolute ml-2' size={18} color='grey' />}
      />
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
          <CustomFormField
              fieldType='date_picker'
              control={form.control}
              name="schedule"
              label="Days and timing"
              showTimeSelect
              dateFormat="MM/dd/yyyy  -  h:mm aa"
            /><CustomFormField control={form.control}
            fieldType='input'
            name='avg_time'
            label='Per visit time'
            placeholder='Average time for one patient (in minute)'
            iconSrc={<FaBusinessTime className='absolute ml-2' size={17} color='grey' />}
          />
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
        <div>
          <section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Receptionist to see live patient booking</h2>
          </section>
          <div className='flex flex-col w-96 lg:flex-row'><CustomFormField control={form.control}
              fieldType='input'
              name='clinic_number'
              label='Phone Number'
              placeholder='Receptionist Mobile Number'
              iconSrc={<FaPhoneAlt className='absolute ml-2' size={15} color='grey' />}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}

export default About