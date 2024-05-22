import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { PiArrowLineDownLeftBold } from 'react-icons/pi';
import avatar from '../../../public/ew.jpg'
import Image from 'next/image';
import { MdCamera } from "react-icons/md";

const ImageGallery = () => {
  return (
    <Container className=' tw-mt-10 ' >
      <Row className='tw-pb-10'>
        <h2 className="tw-text-[35px] tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
          حديث الصور
          <PiArrowLineDownLeftBold/>
        </h2>
      </Row>
      <Row>

        <Row className='tw-pb-7'>
          <Col className='tw-relative tw-mb-4 md:tw-mb-0' lg="6">
            <Image src={avatar} alt="fld" className='tw-h-[350px] tw-shadow-lg'/>
            <h1 className="tw-font-bold tw-text-white tw-text-[25px] tw-mb-2 tw-absolute tw-bottom-5 tw-right-5">
              كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
            </h1>
            <span className='tw-bg-[#07284a] tw-top-5 tw-right-5 tw-font-bold tw-p-2 tw-rounded-lg tw-text-[18px] tw-flex tw-items-center tw-gap-2 tw-text-white tw-absolute'>
              18
              <MdCamera/>
            </span>
          </Col>
          <Col className='tw-relative tw-mb-4 md:tw-mb-0' lg="6">
            <Image src={avatar} alt="fld" className='tw-h-[350px] tw-shadow-lg'/>
            <h1 className="tw-font-bold tw-text-white tw-text-[25px] tw-mb-2 tw-absolute tw-bottom-5 tw-right-5">
              كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
            </h1>
            <span className='tw-bg-[#07284a] tw-top-5 tw-right-5 tw-font-bold tw-p-2 tw-rounded-lg tw-text-[18px] tw-flex tw-items-center tw-gap-2 tw-text-white tw-absolute'>
              18
              <MdCamera/>
            </span>
          </Col>
        </Row>

        <Row>
          <Col className='tw-relative tw-mb-4 md:tw-mb-0' lg="4">
            <Image src={avatar} alt="fld" className='tw-h-[350px] tw-shadow-lg'/>
            <h1 className="tw-font-bold tw-mx-1 tw-text-white tw-text-[25px] tw-mb-2 tw-absolute tw-bottom-5 tw-right-5">
              كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
            </h1>
            <span className='tw-bg-[#07284a] tw-top-5 tw-right-5 tw-font-bold tw-p-2 tw-rounded-lg tw-text-[18px] tw-flex tw-items-center tw-gap-2 tw-text-white tw-absolute'>
              18
              <MdCamera/>
            </span>
          </Col>
          <Col className='tw-relative tw-mb-4 md:tw-mb-0' lg="4">
            <Image src={avatar} alt="fld" className='tw-h-[350px] tw-shadow-lg'/>
            <h1 className="tw-font-bold tw-mx-1 tw-text-white tw-text-[25px] tw-mb-2 tw-absolute tw-bottom-5 tw-right-5">
              كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
            </h1>
            <span className='tw-bg-[#07284a] tw-top-5 tw-right-5 tw-font-bold tw-p-2 tw-rounded-lg tw-text-[18px] tw-flex tw-items-center tw-gap-2 tw-text-white tw-absolute'>
              18
              <MdCamera/>
            </span>
          </Col>
          <Col className='tw-relative tw-mb-4 md:tw-mb-0' lg="4">
            <Image src={avatar} alt="fld" className='tw-h-[350px] tw-shadow-lg'/>
            <h1 className="tw-font-bold tw-mx-1 tw-text-white tw-text-[25px] tw-mb-2 tw-absolute tw-bottom-5 tw-right-5">
              كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
            </h1>
            <span className='tw-bg-[#07284a] tw-top-5 tw-right-5 tw-font-bold tw-p-2 tw-rounded-lg tw-text-[18px] tw-flex tw-items-center tw-gap-2 tw-text-white tw-absolute'>
              18
              <MdCamera/>
            </span>
          </Col>
        </Row>

      </Row>
    </Container>
  )
}

export default ImageGallery
