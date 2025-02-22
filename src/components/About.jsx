import { useContext, useState } from 'react'
import { StepperContext } from '../context/StepperContext'
import {
  Form
} from "@/components/ui/form"
import DayTime from './DayTime'
import CustomFormField from './CustomFormField'
import { FaUserMd, FaPhoneAlt, FaHospital, FaBusinessTime } from "react-icons/fa";
import { MdEmail, MdMedicalServices } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { specialityList } from '../constants/index'
import { SelectItem } from './ui/select'
import CustomModal from './CustomModal'
const About = () => {
  const { form } = useContext(StepperContext)
  const [isModalOpen, setModalOpen] = useState(false);
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
              placeholder='Personal mobile number for login'
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
            <CustomFormField control={form.control}
              fieldType='input'
              name='avg_time'
              label='Per visit time'
              placeholder='Average time for one patient (in minute)'
              iconSrc={<FaBusinessTime className='absolute ml-2' size={17} color='grey' />}
            />
            <div class="space-y-2 flex-1 pt-5">
              <button
                className="px-4 py-1 mt-3 bg-primary_light
                           text-white rounded-lg"
                onClick={(e) => {
                  e.preventDefault()
                  setModalOpen(true)
                }}
              >
                Set days and timing
              </button>
              <CustomModal open={isModalOpen} onClose={() => setModalOpen(false)} handleOpen={setModalOpen} children={
                <div>
                <DayTime/>
                </div>
              } /></div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
        <div>
          <section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Receptionist to see live patient booking</h2>
          </section>
          <div className='flex flex-col w-[375px] lg:flex-row'>
            <CustomFormField control={form.control}
              fieldType='input'
              name='avg_time'
              label='Per visit time'
              placeholder='Average time for one patient (in minute)'
              iconSrc={<FaBusinessTime className='absolute ml-2' size={17} color='grey' />}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}

export default About