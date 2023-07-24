import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  let Navigate = useNavigate();

  let user = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  };

  async function sendRegisterData (values){
    setloading(true);
    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    .catch((error)=>{
      setloading(false);
      setError(error.response.data.message);
    })

    if(data.message == "success"){
      setloading(false);
      Navigate("/login")
    }
  }

  const validation = Yup.object({
      name: Yup.string().required('Required').min(3, "Minimum name 3 character").max(15, "Maxmum name 15 character"),
      email: Yup.string().required('Email is Required').email('Invalid email address'),
      password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
      rePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'rePasswords must match')
        .required('rePassword is Required'),
      phone: Yup.string()
        .matches(/^01[0125][0-9]{8}$/, 'Invalid phone number')
        .required('phone is Required'),
    })

  let formik = useFormik({
    initialValues: user,
    validationSchema:validation,
    onSubmit: sendRegisterData
  });

  return <>
  <section className='py-5'>
  {error?<div className='alert alert-danger text-center'>{error}</div>:""}
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">name</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control mb-3' type="text" name='name' id='name' placeholder='Name'/>
      {formik.errors.name && formik.touched.name?<div className='alert alert-danger text-center'>{formik.errors.name}</div>:""}

      <label htmlFor="email">email</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  className='form-control mb-3' type="email" name='email' id='email' placeholder='Email'/>
      {formik.errors.email && formik.touched.email?<div className='alert alert-danger text-center'>{formik.errors.email}</div>:""}

      <label htmlFor="phone">phone</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}  className='form-control mb-3' type="tel" name='phone' id='phone' placeholder='phone'/>
      {formik.errors.phone && formik.touched.phone?<div className='alert alert-danger text-center'>{formik.errors.phone}</div>:""}

      <label htmlFor="password">password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  className='form-control mb-3' type="password" name='password' id='password' placeholder='Password'/>
      {formik.errors.password && formik.touched.password?<div className='alert alert-danger text-center'>{formik.errors.password}</div>:""}

      <label htmlFor="rePassword">repassword</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.rePassword} className='form-control mb-3' type="password" name='rePassword' id='rePassword' placeholder='Repassword'/>
      {formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger text-center'>{formik.errors.rePassword}</div>:""}

      <button type='submit' className='btn btn-success'>{loading?<i className='fas fa-spinner fa-spin'></i>:"Register"}</button>
    </form>
  </section>
  </>
}
