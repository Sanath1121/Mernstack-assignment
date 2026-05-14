import React from 'react'
import {NavLink} from 'react-router'
import logo from '../assets/logo.jpeg'

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-800 text-white p-4">
      <img src={logo} alt="Logo" className="w-16 h-16 rounded-full object-cover border-2 border-gray-600" />
      <nav >
        <ul className='flex gap-10'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/productList">ProductList</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header