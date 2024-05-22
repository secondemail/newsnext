"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Accordion, Button, Container, Offcanvas } from "react-bootstrap"
import { LuListEnd } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import logo from '../../../public/logo.png'
import db from "../../../public/api/db.json"

const NavBar = () => {
  const currentPath = usePathname();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <nav className="tw-bg-[#07284a]  tw-shadow-md">
      <Container className="tw-flex tw-justify-between tw-p-4 " >
        <Link href="/">
          <Image src={logo} alt="logo" width={170} height={50} />
        </Link>
        <div >
          <Button variant="outline-primary" onClick={handleShow}>
            <LuListEnd className="tw-text-3xl"/>
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header >
              <IoCloseCircle onClick={handleClose} className="tw-text-4xl tw-cursor-pointer"/>
            </Offcanvas.Header>
            <Offcanvas.Body className="tw-font-bold">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>التصنيفات</Accordion.Header>
                  <Accordion.Body>
                    {
                      db.category ?
                      db.category.map((i,index)=>
                      (
                        <Accordion className="tw-mb-2" key={i.id} defaultActiveKey={currentPath.includes(`${i.id}`) ? `${i.id}` : "" }>
                          <Accordion.Item  eventKey={i.id}>
                            <Accordion.Header>
                              {i.title}
                            </Accordion.Header>
                            <Accordion.Body>
                              {
                                i?.subCat.map((s,index)=>
                                  (
                                    <Link onClick={handleClose} key={s.id} href={`/category/${i.id}/subcat/${s.id}`} className={currentPath === `/category/${i.id}/subcat/${s.id}` ? "tw-my-2 tw-rounded-lg  tw-text-white tw-bg-slate-600 tw-p-2 tw-flex tw-items-center tw-gap-3 tw-cursor-pointer " : "tw-my-2 tw-p-2 tw-flex tw-items-center tw-gap-3 tw-cursor-pointer hover:tw-bg-slate-600 tw-transition tw-rounded-lg hover:tw-text-white"}>
                                      <FaArrowAltCircleLeft/>
                                      {s.title}
                                    </Link>
                                  )
                                )
                              }
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      )
                      ):null
                    }
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="tw-my-10 tw-text-center">
                <Link className="tw-border-2 tw-border-sky-900 tw-rounded-md tw-p-2 hover:tw-bg-sky-900 hover:tw-text-white tw-transition" href="/login">
                  تسجيل الدخول
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        
      </Container>
    </nav>
  )
}

export default NavBar
