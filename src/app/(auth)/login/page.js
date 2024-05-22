"use client"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container, FloatingLabel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Flip, ToastContainer } from 'react-toastify';
import notify from './../../_components/useNotifaction';
import { TbFidgetSpinner } from "react-icons/tb";


const Login = () => {
  const router=useRouter();
  const [press,setPress]=useState(false);

  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const signUp=async(values)=>{
    setPress(true)
    notify(`أهلا بعودتك , تصفح سعيد`,"success")
    setTimeout(() => {
      router.push("/")
    }, 1500);
  }

  return ( 
    <Container>
      <Row className="text-center tw-py-7">
        <h1 className='tw-font-bold tw-text-[27px]'>
          تسجيل الدخول
        </h1>
      </Row>
      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={signUp}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3 tw-flex tw-justify-center">
                <Form.Group as={Col} lg="6" controlId="validationFormikEmail">
                  <InputGroup hasValidation>
                    <FloatingLabel controlId="floatingInputGrid" label="أدخل الايميل ...">
                      <Form.Control
                        type="text"
                        placeholder="email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3 tw-flex tw-justify-center">
                <Form.Group as={Col} lg="6" controlId="validationFormikPassword">
                  <InputGroup hasValidation>
                    <FloatingLabel controlId="floatingInputGrid2" label=" كلمة السر ...">
                      <Form.Control
                        type="password"
                        placeholder="password"
                        aria-describedby="inputGroupPrepend"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <div className="text-center">
                {
                  !press ?
                  (
                    <Button  type="submit">
                      تسجيل الحساب
                    </Button>
                  ):
                  (
                    <div className="tw-flex tw-justify-center tw-text-[45px]">
                      <TbFidgetSpinner className="tw-animate-spin"/>
                    </div>
                  )
                }
              </div>

            </Form>
          )}
        </Formik>
      </Row>
      <Row>
        <span className="tw-flex tw-gap-2 tw-py-10">
          ليس لديك حساب؟ 
          <Link href='/signup' className="tw-text-sky-600 tw-font-bold tw-border-b-2">
            سجل الان
          </Link>
        </span>
      </Row>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" transition={Flip} />
    </Container>
  )
}

export default Login