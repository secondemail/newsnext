import React from 'react'
import { Container } from 'react-bootstrap'
import { TbFidgetSpinner } from "react-icons/tb";

const loading = () => {
  return (
    <Container>
      <div className='tw-flex tw-justify-center tw-pt-28 tw-text-[100px] '>
        <TbFidgetSpinner className="tw-animate-spin"/>
      </div>
    </Container>
  )
}

export default loading
