import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <Container className='tw-mt-20 tw-py-7 tw-border-t-2'>
      <Image className='tw-m-auto' src={logo} alt='lo' width={200}/>
      <p className='tw-text-center tw-font-bold'>
        كافة العلامات التجارية الخاصة بـ SkyLine وكل ما تتضمنه من حقوق الملكية الفكرية هي ملك لمجموعة Kareem Co ولا تستخدم إلا بتصريح مسبق 
      </p>
    </Container>
  )
}

export default Footer