import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RouteLayout() {
  return (
    <div>
        <Header/>
        {/* {Component placeholder} */}
        <div className='mx-20 min-h-screen'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RouteLayout