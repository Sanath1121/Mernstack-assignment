import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between items-center px-10 bg-gray-800 text-white p-4'>
        {/* Navigation bar */}
        <img className='py-2 w-10 rounded-[50%]' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_rp_progressive&w=740&q=80" alt="Logo"  />
        <nav className='flex gap-10'>
            <ul className='flex gap-10'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/technologies'>Technologies</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header