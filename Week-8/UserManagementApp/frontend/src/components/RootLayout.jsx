import React from 'react'
import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-800 flex flex-col'>
        <Header/>
        <main className='flex-1 max-w-6xl mx-auto px-4 py-6 w-full'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout