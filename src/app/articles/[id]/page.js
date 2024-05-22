"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Container, Row,Badge } from 'react-bootstrap'
import { IoTimer } from 'react-icons/io5'
import avatar from '../../../../public/ew.jpg'
import db from "../../../../public/api/db.json"
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import Link from 'next/link'




const Articles = ({params}) => {
  const [arData,setArData]=useState([])
  useEffect(()=>{
    setArData(db.news.filter(ar=>ar.id===params.id))
  },[])

  return (
    <Container>
      {
        db.news.filter(ar=>ar.id===params.id) .length > 0 ?
        (
          <div>
            <div className='tw-flex tw-justify-end tw-py-5'>
              <div className='tw-border-2 tw-flex tw-gap-2 tw-p-3'>
                {
                  arData &&arData.length > 0 ?
                  (
                    <span className=" tw-p-2 tw-flex tw-items-center">
                      {arData[0].subCat}
                    </span>
                  ):null
                }
                <span className="tw-flex tw-items-center">
                  <MdOutlineDoubleArrow/>
                </span>
                {
                  arData &&arData.length > 0 ?
                  (
                    <span className="tw-border-r-2 tw-p-2 tw-bg-sky-800 tw-text-white tw-flex tw-items-center">
                      {arData[0].cat}
                    </span>
                  ):null
                }
                <span className="tw-flex tw-items-center">
                  <MdOutlineDoubleArrow/>
                </span>
                <span className="tw-border-r-2 tw-p-2 tw-bg-sky-800 tw-text-white tw-flex tw-items-center">
                  الرئيسية
                </span>
              </div>
            </div>
            <Row className="tw-pt-10">
              {
                arData &&arData.length > 0 ?
                (
                  <h1 className="tw-font-bold tw-text-[35px]">
                    {arData[0].title}
                  </h1>
                ):null
              }
              <span className="tw-flex tw-flex-col md:tw-flex-row tw-font-bold tw-gap-1 tw-items-center tw-justify-between tw-pt-4 ">
                <span className="tw-flex tw-items-center">
                  <IoTimer className="tw-text-[25px] tw-text-gray-500 tw-mr-2" />
                    11/5/2024 - 8:05 بتوقيت القاهرة
                </span>
                <span className="tw-flex tw-font-bold tw-items-center">
                  <FaUserEdit className="tw-text-[20px] tw-text-gray-500 tw-ml-1" />
                  بقلم/ كريم نبيل
                </span>
              </span>
              <span className="tw-font-bold tw-py-7">
              {arData && arData.length > 0 && arData[0].important === true ? (<Badge className="tw-p-2">خاص</Badge>):null}  سكاي لاين نيوز - مصر
              </span>
            </Row>
            <div className="tw-relative">
              <Image src={avatar} className="tw-h-[500px]" alt="sa"/>
              <h3 className='tw-absolute tw-bottom-0 tw-text-white tw-p-3 tw-bg-black tw-opacity-50'>
                مثال لوصف الصورة
              </h3>
            </div>
            <Row className="tw-py-10 tw-p-0">
              {
                arData &&arData.length > 0 ? 
                (
                  <div className='tw-font-bold tw-text-[25px]'>
                    {
                      arData[0].summary
                    }
                  </div>
                ):null
              }
              {
                arData &&arData.length > 0 ? 
                (
                  <div className='tw-text-[25px] tw-pt-5 tw-p-0'>
                    {
                      arData[0].content
                    }
                  </div>
                ):null
              }
            </Row>
          </div>
        ):(
          <div className='tw-text-center tw-pt-20'>
            <div className="tw-flex tw-items-center tw-justify-center tw-text-[100px]">
              4<RiEmotionSadLine/>4
            </div>
            <h2 className=" tw-text-[20px] tw-pb-6">عفوا هذا المقال غير موجود</h2>
            <Link href="/" className=" tw-text-[20px] tw-text-sky-800">العوده للصفحة الرئيسية</Link>
          </div>
        )
      }
    </Container>
  )
}

export default Articles