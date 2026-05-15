import React from 'react'
import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className='bg-amber-200 border-b border-amber-300 px-4 py-2 text-lg md:text-xl flex justify-between items-center'>
        <img className='w-10 h-10 rounded-full object-cover border border-amber-400' src={logo} alt="Logo" />
        <nav>
            <ul className='flex items-center gap-3 md:gap-6 mx-2 md:mx-6 font-medium'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'px-3 py-1 rounded bg-amber-800 text-white' : 'px-3 py-1 rounded hover:bg-amber-300'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/adduser" className={({ isActive }) => isActive ? 'px-3 py-1 rounded bg-amber-800 text-white' : 'px-3 py-1 rounded hover:bg-amber-300'}>AddUser</NavLink>
                </li>
                <li>
                    <NavLink to="/userslist" className={({ isActive }) => isActive ? 'px-3 py-1 rounded bg-amber-800 text-white' : 'px-3 py-1 rounded hover:bg-amber-300'}>UsersList</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header