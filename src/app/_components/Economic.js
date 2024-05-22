"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PiArrowLineDownLeftBold } from 'react-icons/pi';
import avatar from '../../../public/ew.jpg'
import logo from '../../../public/logo.png'
import Image from 'next/image';
import Link from "next/link";


const Economic = ({data}) => {
  return (
    <Container className='tw-bg-[#3675ba] tw-p-10 tw-mt-10 ' >
      <Row className='tw-pb-10'>
      <Link href="/category/1">
        <h2 className="tw-text-[35px] tw-text-white tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
          أخبار الاقتصاد
          <PiArrowLineDownLeftBold/>
        </h2>
      </Link>
      </Row>
      <Row>
        {
          data.news.filter(e=>e.catid === "1" ).slice(0,3).map(i=>(
            <Col key={i.id} lg="4" className="tw-relative">
              <Link  href={`/articles/${i.id}`}>
                  <Image src={avatar} alt="fld" className='tw-h-[230px]'/>
                  <div className='tw-pt-5 tw-pr-7 tw-text-white'>
                    <span className="tw-text-[17px] tw-flex tw-pr-2 tw-mb-4 tw-font-bold tw-border-r-[5px] tw-border-[#07284a]">
                      {i.cat}
                    </span>
                    <h1 className="tw-font-bold tw-text-[20px] tw-mb-2">
                      {i.title}
                    </h1>
                  </div>
                  <Image src={logo} alt="lo" className="tw-absolute tw-top-40 tw-right-7 tw-opacity-50" width={150} />
              </Link>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Economic