import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PiArrowLineDownLeftBold } from 'react-icons/pi';
import avatar from '../../../public/ew.jpg'
import logo from '../../../public/logo.png'
import Image from 'next/image';
import { IoTimer } from 'react-icons/io5';

const Infographic = () => {
  const list=[1,2]
  return (
    <Container className='tw-bg-[#232323] tw-p-10 tw-mt-10 ' >
      <Row className='tw-pb-10'>
        <h2 className="tw-text-[35px] tw-text-white tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#ac0000]">
          إنفوغرافيك
          <PiArrowLineDownLeftBold/>
        </h2>
      </Row>
      <Row>
        {
          list.map(i=>(
            <Col key={i} lg="6" className="tw-relative tw-pb-5">
              <Image src={avatar} alt="fld" className='tw-h-[300px]'/>
              <div className='tw-pt-5 tw-pr-4 tw-text-white'>
                <h1 className="tw-font-bold tw-text-[20px] tw-mb-2">
                  هاليب تنسحب من بطولة مدريد المفتوحة للتنس
                </h1>
                <span className="tw-flex tw-justify-end tw-gap-1 tw-items-center">
                  <IoTimer className="tw-text-[20px]  tw-mr-2" />
                  10 دقيقة منذ الآن
                </span>
              </div>
              <Image src={logo} alt="lo" className="tw-absolute tw-top-[220px] tw-right-7 tw-opacity-50" width={150} />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Infographic