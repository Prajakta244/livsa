import { useState } from 'react'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import About from '../components/About'
import About_Hospital from '@/components/About_Hospital'
import Address from '../components/Address'
import Images from '../components/Images'
import { StepperContext } from '../context/StepperContext'
import { formSchema } from '../lib/validations'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { useUploadFormDataMutation } from '@/state/api'
import CustomModal from '@/components/CustomModal'
import Register_success from '@/components/Register_success'
const RegisterForm = () => {
  const [uploadFormData] = useUploadFormDataMutation()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ name: '', email_id: '' })
  const [formState, setFormState] = useState('')
  const [finalData, setFinalData] = useState('')
  const [schema, setSchema] = useState(z.object({}))
  const steps = ['About', 'Address', 'Images']
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',
      state: '',
      address: ''
    },
  })
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return pathname == '/register-clinic' ? <About /> : <About_Hospital />
      case 2:
        return <Address />
      case 3:
        return <Images />
    }
  }
  const handleFormSubmission = async (data, direction) => {
    console.log('Form submitted:', data, direction); // Form data from the child component
    // console.log(' currentStep', currentStep)
    if (currentStep == steps.length) {
      const formData = new FormData()
      console.log(data.name)
      formData.append('name', data.name)
      formData.append('email_id', data.email)
      formData.append('mobile_number', data.phone_number)
      formData.append('receptionist_mobile', data.clinic_number)
      formData.append('city', data.email)
      formData.append('full_address', data.address)
      formData.append('state', data.state)
      formData.append('days_and_timings', JSON.stringify(data.weekDayObj))
      formData.append('speciality', data.speciality)
      formData.append('hospital_name', data.clinic)
      formData.append('qualification', data.qualification)
      formData.append('doctor_photo', data.docProfile[0])
      formData.append('password', '')
      data.hospImages.forEach(file => {
        formData.append('hospital_photos', file)
      })
      // const res = await uploadFormData(formData).unwrap()
      // console.log("Upload successful!",res);
      // if(res.status !== 'success'){
      
      setModalOpen(true)
      console.log(modalData)
      // }

    }
    let newStep = currentStep
    direction === 'next' ? newStep++ : newStep--
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  };
  const onError = (errors) => {
    console.log('Validation errors:', errors);
  };
  const handleClick = async (direction, currentStep) => {
    if (currentStep == 1 && direction == 'back') {
      navigate('/register')
    }
    return form.handleSubmit((data) => {
      console.log('form values', form.getValues());
      // console.log('Custom Param:', direction);
      if(currentStep == 1){
        setModalData({...modalData,name:form.getValues().name,email_id:form.getValues().email})
      }
      handleFormSubmission(form.getValues(), direction)
    })();
    console.log('get values')
    const result = formSchema.safeParse(userData); // Manually validate data
    // console.log('form state',formState.errors)
    if (!result.success) {
      // 4. Map Zod errors to React Hook Form's setError
      result.error.errors.forEach(({ path, message }) => {
        form.setError(path[0], { type: 'manual', message }); // path[0] gets the field name
      });
      console.log('Validation failed:', result.error.errors);
    }
  }
  return (
    <div className='md:w-[850px] h-full  mx-auto shadow-xl rounded-2xl pb-2 bg-white overflow-hidden'>
      <div className='container horizontal mt-5 h-full'>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className='mb-10 p-10'>
          <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData, handleClick, setSchema, setFormState, form }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      <StepperControl steps={steps} currentStep={currentStep} handleClick={handleClick} />
      <CustomModal open={isModalOpen} onClose={() => setModalOpen(false)} handleOpen={setModalOpen} children={
        <div>
          <Register_success data={modalData}/>
        </div>
      }
         />
    </div>
  )
}

export default RegisterForm