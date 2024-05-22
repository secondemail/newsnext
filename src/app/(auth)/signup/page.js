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
import notify from './../../_components/useNotifaction';
import {  useRouter } from 'next/navigation';
import { TbFidgetSpinner } from 'react-icons/tb';
import Link from 'next/link';
import { Flip, ToastContainer } from 'react-toastify';

const SignUp = () => {
  const router=useRouter();
  const [press,setPress]=useState(false);

  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    confermPassword: yup.string().required().oneOf([yup.ref('password'),null],"pass must match"),
    email: yup.string().email().required(),
  });

  const signUp=async(values)=>{
    setPress(true)
    notify(`شكرا لانضمامك , تصفح سعيد`,"success")
    setTimeout(() => {
      router.push("/")
    }, 1500);
  }

  return ( 
    <Container>
      <Row className="text-center tw-py-7">
        <h1 className='tw-font-bold tw-text-[27px]'>
          تسجيل حساب جديد
        </h1>
      </Row>
      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={signUp}
          initialValues={{
            username: '',
            password: '',
            confermPassword: '',
            email: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3 tw-flex tw-justify-center">
                <Form.Group as={Col} lg="6" controlId="validationFormikUsername">
                  <InputGroup hasValidation>
                    <FloatingLabel controlId="floatingInputGrid" label="اسم المستخدم ...">
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
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
              <Row className="mb-3 tw-flex tw-justify-center">
                <Form.Group as={Col} lg="6" controlId="validationFormikConfermPassword">
                  <InputGroup hasValidation>
                    <FloatingLabel controlId="floatingInputGrid4" label=" تأكيد كلمة السر ...">
                      <Form.Control
                        type="password"
                        placeholder="confermPassword"
                        aria-describedby="inputGroupPrepend"
                        name="confermPassword"
                        value={values.confermPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confermPassword}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid">
                      {errors.confermPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3 tw-flex tw-justify-center">
                <Form.Group as={Col} lg="6" controlId="validationFormikEmail">
                  <InputGroup hasValidation>
                    <FloatingLabel controlId="floatingInputGrid3" label=" الايميل ...">
                      <Form.Control
                        type="email"
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
          لديك حساب؟ 
          <Link href='/login' className="tw-text-sky-600 tw-font-bold tw-border-b-2">
            تسجيل الدخول
          </Link>
        </span>
      </Row>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" transition={Flip} />
    </Container>
  )
}

export default SignUp