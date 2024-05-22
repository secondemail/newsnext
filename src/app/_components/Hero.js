import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'

const Hero = () => {
  return (
    <div className='tw-flex  asd tw-justify-center tw-p-10 md:tw-p-20  tw-text-[#07284a] tw-font-bold tw-rounded-b-full '>
      <div className='tw-hidden md:tw-flex tw-items-center tw-pr-20' >
        <Image src={logo} alt='hero' width={300} height={50} />
      </div>
      <div className='tw-font-bold tw-m-auto  tw-text-[13px] sm:tw-text-[15px] lg:tw-text-[27px]'>
        <div className='tw-flex tw-gap-20'>
          <div className='tw-flex tw-flex-col'>
            <span>
              نائب رئيس مجلس الادارة: 
            </span>
            <span className='tw-text-center'>
              م/كريم نبيل
            </span>
          </div>
          <div className='tw-flex tw-flex-col'>
            <span>
              رئيس التحرير: 
            </span>
            <span className='tw-text-center'>
              م/كريم نبيل
            </span>
          </div>
        </div> 
        <div className='tw-flex tw-flex-col tw-pt-10'>
          <span className='tw-text-center'>
            رئيس مجلس الادارة: 
          </span>
          <span className='tw-text-center'>
            م/كريم نبيل
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
