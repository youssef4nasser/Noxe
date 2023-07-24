import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({userData, setuserData}) {
  let navigate = useNavigate();

  function LogOut(){
    localStorage.removeItem("usertokenmovie");
    setuserData(null);
    navigate("/login")
  }

  return <>
    <Navbar LogOut={LogOut} userData={userData} />
    <div className="container">
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
