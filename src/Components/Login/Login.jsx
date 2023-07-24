import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login({saveUserData}) {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  let Navigate = useNavigate();

  let user = {
    email: '',
    password: '',
  };

  async function sendLoginData (values){
    setloading(true);
    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    .catch((error)=>{
      console.log(error.response.data.message);
      setloading(false);
      setError(error.response.data.message);
    })

    if(data.message == "success"){
      console.log(data.message);
      setloading(false);
      Navigate("/")
      localStorage.setItem("usertokenmovie", data.token);
      saveUserData();
    }
  }

  const validation = Yup.object({
      email: Yup.string().required('Email is Required').email('Invalid email address'),
      password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    })

  let formik = useFormik({
    initialValues: user,
    validationSchema:validation,
    onSubmit: sendLoginData
  });

  return <>
  <section className='py-5'>
  {error?<div className='alert alert-danger text-center'>{error}</div>:""}
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">email</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  className='form-control mb-3' type="email" name='email' id='email' placeholder='Email'/>
      {formik.errors.email && formik.touched.email?<div className='alert alert-danger text-center'>{formik.errors.email}</div>:""}

      <label htmlFor="password">password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  className='form-control mb-3' type="password" name='password' id='password' placeholder='Password'/>
      {formik.errors.password && formik.touched.password?<div className='alert alert-danger text-center'>{formik.errors.password}</div>:""}

      <button type='submit' className='btn btn-success'>{loading?<i className='fas fa-spinner fa-spin'></i>:"Login"}</button>
    </form>
  </section>
  </>
}
