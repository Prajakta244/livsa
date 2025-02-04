import React from 'react'
import Dropfiles from './Dropfiles'

const Images = () => {
  return (
    <div>
<section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Photos of doctor</h2>
          </section>
      <Dropfiles className='p-10 mt-5 border border-neutral-200'/>
      <div className='w-full h-[1px] bg-[#D3D3D3]'></div>
      <section className='mb-4'>
            <h2 className='text-lg sm:text-xl tracking-wide'>Photos of hospital</h2>
          </section>
      <Dropfiles className='p-10 mt-5 border border-neutral-200'/>
    </div>
  )
}

export default Images