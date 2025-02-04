import React from 'react'
import {
  Form
} from "@/components/ui/form"
import { useContext, useState } from 'react'
import { StepperContext } from '../context/StepperContext'
import { SelectItem } from './ui/select'
import CustomFormField from './CustomFormField'
import { stateList } from '../constants/index'
import { cityList } from '../constants/index'
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api'
import Map from './Map'
const center = {
  lat: 19.076090,
  lng: 72.877426,
}
const containerStyle = {
  width: "100%",
  height: "400px",
};
const Address = () => {
  const { userData, setUserData, handleClick, setSchema, setFormState, form } = useContext(StepperContext)
  // const { isLoaded } = useJsApiLoader({ googleMapsApiKey:'AIzaSyB32VdUA3xjJvjWIXeDexlRJ3sFYS8UKoM' });
  // if (!isLoaded) {
  //   return null;
  // }
  const [location, setLocation] = useState(center);
  const [address, setAddress] = useState("");
  const getAddressFromCoordinates = async (lat, lng) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    const response = await fetch(
      url
    );
    const data = await response.json();
   
    console.log('data', data)
    if (data.display_name) {
      setAddress(data.display_name);
      form.setValue("address", data.display_name); // Store address in form
    }
  };
  const handleMapClick = (event) => {
    console.log('inside handleMapClick')
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    console.log(newLat, newLng)
    setLocation({ lat: newLat, lng: newLng });
    getAddressFromCoordinates(newLat, newLng);
  };
  
  return (
    <LoadScript googleMapsApiKey='AIzaSyB32VdUA3xjJvjWIXeDexlRJ3sFYS8UKoM'>
      <Form {...form}>
        <form className="space-y-4 flex-1">
          <div className='mb-7'>
            <section className='mb-4'>
              <h2 className='text-lg sm:text-xl tracking-wide'>Address Details</h2>
            </section>
            <div className='flex flex-col gap-6 lg:flex-row'>
              <CustomFormField control={form.control}
                fieldType='select'
                name='state'
                label='State'
                placeholder='Select a state'
              >
                {stateList.map((state) => (
                  <SelectItem key={state} value={state}>
                    <div>
                      <p>{state}</p>
                    </div>
                  </SelectItem>
                ))}
              </CustomFormField>
              <CustomFormField control={form.control}
                fieldType='select'
                name='city'
                label='City'
                placeholder='Select a city'
              >
                {cityList.map((city) => (
                  <SelectItem key={city} value={city}>
                    <div>
                      <p>{city}</p>
                    </div>
                  </SelectItem>
                ))}
              </CustomFormField>
            </div>
            <div>
              <CustomFormField control={form.control}
                fieldType='input'
                name='address'
                label='Full address'
                placeholder=''
              />
            </div>
          </div>
          <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
          <div className='mb-7 '>
            <GoogleMap mapContainerStyle={containerStyle}
              center={location}
              zoom={10}
              onClick={handleMapClick} />
          </div>
        </form>
      </Form>
    </LoadScript>
  )
}

export default Address