"use client"
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import avatar from '../../../../../../public/ew.jpg'
import Image from 'next/image'
import { IoTimer } from "react-icons/io5";
import { PiArrowLineDownLeftBold } from "react-icons/pi";
import data from "../../../../../../public/api/db.json";
import Link from "next/link";



const SubCategory = ({params}) => {

  return (
    <Container>
      <Row className='tw-py-10' >
        <Col lg="7">
          <Image src={avatar} alt='ss' className='tw-h-[300px]' />
        </Col>
        <Col lg="5" className='tw-flex tw-items-center'>
          <div>
            <h1 className='tw-font-bold tw-text-[40px]'>
              {
                data.category.filter(c=>c.id === params.catid)[0].subCat.filter(s=>s.id === params.subcatid)[0].title
              }
            </h1>
            <p>
              {
                data.category.filter(c=>c.id === params.catid)[0].subCat.filter(s=>s.id === params.subcatid)[0].caption
              }
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Row>
          <h2 className="tw-text-[30px] tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
            آخر الأخبار
            <PiArrowLineDownLeftBold/>
          </h2>
        </Row>
        <Row className="tw-pt-5 tw-flex tw-justify-center md:tw-justify-normal tw-gap-3">
          {
            data.news.filter(n=>n.subcatid===params.subcatid).length > 0 ?
            data.news.filter(n=>n.subcatid===params.subcatid).map(i=>(
              <Col key={i.id} lg="3" className="tw-border-2 hover:tw-animate-pulse tw-cursor-pointer tw-rounded-md tw-p-0 hover:tw-bg-[#07284a] hover:tw-text-white tw-transition">
                <Link href={`/articles/${i.id}`}>
                  <div>
                    <Image className="tw-rounded-t-md tw-h-[200px]" src={avatar} alt="sm" />
                  </div>
                  <div className="tw-p-5">
                    <span className="tw-text-[17px] tw-flex tw-pr-2 tw-mb-4 tw-font-bold tw-border-r-[5px] tw-border-[#07284a]">
                      {i.cat}
                    </span>
                    <h1 className="tw-font-bold tw-text-[20px] tw-mb-2">
                      {i.title}
                    </h1>
                    <span className="tw-flex tw-justify-end tw-gap-1 tw-items-center">
                      <IoTimer className="tw-text-[20px] tw-text-gray-500 tw-mr-2" />
                      10 دقيقة منذ الآن
                    </span>
                  </div>
                </Link>
              </Col>
            )):(<h2>لا يوجد مقالات</h2>)
          }
        </Row>
      </Row>
      <Row className='tw-pt-10'>
        <Row>
          <h2 className="tw-text-[30px] tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
            المزيد من الأخبار
            <PiArrowLineDownLeftBold/>
          </h2>
        </Row>
        <Row className="tw-pt-5 tw-flex tw-justify-center md:tw-justify-normal tw-gap-3">
          {
            data.news.filter(n=>n.subcatid===params.subcatid).length > 0 ?
              data.news.filter(n=>n.subcatid===params.subcatid).map(i=>(
                <Col key={i.id} lg="3" className="tw-border-2 hover:tw-animate-pulse tw-cursor-pointer tw-rounded-md tw-p-0 hover:tw-bg-[#07284a] hover:tw-text-white tw-transition">
                  <Link href={`/articles/${i.id}`}>
                    <div>
                      <Image className="tw-rounded-t-md tw-h-[200px]" src={avatar} alt="sm" />
                    </div>
                    <div className="tw-p-5">
                      <span className="tw-text-[17px] tw-flex tw-pr-2 tw-mb-4 tw-font-bold tw-border-r-[5px] tw-border-[#07284a]">
                        {i.cat}
                      </span>
                      <h1 className="tw-font-bold tw-text-[20px] tw-mb-2">
                        {i.title}
                      </h1>
                      <span className="tw-flex tw-justify-end tw-gap-1 tw-items-center">
                        <IoTimer className="tw-text-[20px] tw-text-gray-500 tw-mr-2" />
                        10 دقيقة منذ الآن
                      </span>
                    </div>
                  </Link>
                </Col>
            )):(<h2>لا يوجد مقالات</h2>)
          }
        </Row>
      </Row>
    </Container>
  )
}

export default SubCategory
