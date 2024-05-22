import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap"
import { PiArrowLineDownLeftBold } from "react-icons/pi";
import avatar from '../../../public/ew.jpg'
import { IoTimer } from "react-icons/io5";
import Link from "next/link";

const LatestNews = ({data}) => {
  return (
    <Container>
      <Row className="tw-pt-10">
        <Col lg="9">
          <Row>
            <h2 className="tw-text-[30px] tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
              آخر الأخبار
              <PiArrowLineDownLeftBold/>
            </h2>
          </Row>
          <Row className="tw-pt-5 tw-flex tw-justify-center md:tw-justify-normal tw-gap-3">
              {
                data.news.slice(0,3).map(i =>
                  (
                    <Col key={i.id} className="tw-border-2 hover:tw-animate-pulse tw-cursor-pointer tw-w-[320px] tw-rounded-md tw-p-0 hover:tw-bg-[#07284a] hover:tw-text-white tw-transition" lg="4">
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
                  )
                )
              }
          </Row>
        </Col>
        <Col lg="3">
          <Row className="tw-pr-5 tw-pt-5 md:tw-pt-0">
            <h2 className="tw-text-[30px] tw-flex tw-gap-4 tw-items-center tw-font-bold tw-border-r-[10px] tw-border-[#07284a]">
              تصفح أيضا
              <PiArrowLineDownLeftBold/>
            </h2>
          </Row>
          <Row className="tw-p-5">
            {
              data.news.slice(0, 3).map(i => (
                <Col className="hover:tw-bg-sky-900 hover:tw-text-white tw-transition" key={i.id}  lg="12" xs="6" >
                  <Link href={`/articles/${i.id}`} className="tw-flex tw-gap-1 tw-py-4 tw-border-b-2">
                    <div>
                      <Image className="tw-h-[80px] tw-w-[120px] md:tw-h-[100px] " src={avatar} alt="sm" />
                    </div>
                    <div>
                      <span className="tw-text-[13px] tw-flex tw-pr-2 tw-mb-4 tw-font-bold tw-border-r-[5px] tw-border-[#07284a]">
                        {i.cat}
                      </span>
                      <h1 className="tw-font-bold tw-text-[12px] md:tw-text-[15px] tw-mb-2 tw-line-clamp-2 ">
                        {i.title}
                      </h1>
                    </div>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LatestNews