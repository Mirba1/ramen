import React from 'react'
import {Outlet} from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className='text-black'>
      <h1>
        AboutUsPage
      </h1>
      <Outlet/>
    </div>
  )
}
export default AboutUsPage
