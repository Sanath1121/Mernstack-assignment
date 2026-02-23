import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products'
import Product from './components/Product'

function App() {
  return(
    <div>
      <h1 className='text-5xl text-center p-5'>Welcome to Products-Page</h1>
      <Products/>
    </div>    
  )
}

export default App
