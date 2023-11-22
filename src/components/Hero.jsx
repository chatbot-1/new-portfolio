import React from 'react'
import cover from "../assets/cover.jpeg"

const Hero = () => {
  return (
    <div className='container flex items-center justify-center'>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-11 justify-center items-center mt-[50px]'>
        <div className=''>
          <img src={cover} alt="" className='h-[300px] mx-auto object-cover w-[300px]'/>
        </div>
        <div className=''>
          <h2 className='text-[25px] text-center'>Hii, Atul Here!!!</h2>
          <p className='mt-[20px] text-[14px]'>Crafting beautiful interfaces, components and experiences for the web with a focus on ux design and branding. Frontend Engineer at Dunolabs</p>
          <p className='mt-[20px] text-[14px]'>In the past I've developed Invoicetor, a simple invoicing app for freelancers and small scale businesses & individuals.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero