import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import avatar from '../../../../public/ew.jpg'
import { PiArrowLineDownLeftBold } from 'react-icons/pi'
import Image from 'next/image'
import Link from 'next/link'
import data from "../../../../public/api/db.json"
import { RiEmotionSadLine } from "react-icons/ri";

const OneCategory = ({params}) => {
  return (
    <Container>
      {
        data.category.filter(c=>c.id === params.catid ).length > 0 ?
        (
          <Row className='tw-py-10'>
            {
              data.category.filter(c=>c.id === params.catid )[0].subCat.map(i=>(
                <Col key={i.id} lg="3" className='tw-pb-7 md:pb-0' >
                  <Link href={`/category/${params.catid}/subcat/${i.id}`}>
                    <h2 className="tw-text-[27px] tw-flex tw-pr-3 tw-gap-2 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
                      {i.title}
                      <PiArrowLineDownLeftBold/>
                    </h2>
                  </Link>
                  <Row>
                    {
                      data.news.filter(ar=>ar.subcatid === i.id).length > 0 ?
                      data.news.filter(ar=>ar.subcatid === i.id).map(i=>(
                          <Col className="hover:tw-bg-sky-900 hover:tw-text-white tw-transition" key={i} lg="12" xs="6">
                            <Link href={`/articles/${i.id}`}>
                              <div  className='tw-pt-7 md:tw-flex tw-items-center tw-gap-2 tw-border-b-2 tw-py-2'>
                                <Image src={avatar} alt="as" width={130}/>
                                <h1 className="tw-font-bold tw-text-[16px] tw-mb-2">
                                  {i.title}
                                </h1>
                              </div>
                            </Link>
                          </Col>
                      )):(<h2>لايوجد مقالات</h2>)
                    }
                  </Row>
                </Col>
              ))
            }
          </Row>
        )
        :
        (
          <div className='tw-text-center tw-pt-20'>
            <div className="tw-flex tw-items-center tw-justify-center tw-text-[100px]">
              4<RiEmotionSadLine/>4
            </div>
            <h2 className=" tw-text-[20px] tw-pb-6">عفوا هذه الصفحة غير موجود</h2>
            <Link href="/" className=" tw-text-[20px] tw-text-sky-800">العوده للصفحة الرئيسية</Link>
          </div>
        )
      }
    </Container>
  )
}

export default OneCategory