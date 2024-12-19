import React from 'react'
import './homepage.css'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import Brand from './Brand.jsx'
// import { IoClose } from "react-icons/io5";
const HomePage = () => {
  return (
    <div>
      <main className='container'>
      <div className="coupon">
        <p>Sign up and get 20% off to your first order. <a className='couponsignup' href='signup'>Sign Up Now</a> </p>
        {/* < IoClose /> */}
      </div>
      <Navbar/>
      <Banner/>
      <Brand/>
      </main>
    </div>
  )
}

export default HomePage