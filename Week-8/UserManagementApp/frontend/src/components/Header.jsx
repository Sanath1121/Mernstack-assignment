import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className='bg-amber-200 border-b border-amber-300 px-4 py-2 text-lg md:text-xl flex justify-between items-center'>
        <img className='w-10 h-10 rounded-full object-cover border border-amber-400' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABGlBMVEX////t7e319fXu7u729vb6wTzs7OyAy8Tr6+sBNmjx8fEANGcAIl7/yDmH1csAMWkAMGX/xDsaQmwAMWUAK2IAMGnBxMwAJ2EAKWr/yjgAK2kAIGwAIF0AJWAALWQAJ2vxwD5AUGIAGVkAI2uzlE5dX2B4wb2V1M7bskKDeFcAHFsAHWxUV2IAFVgAC1VbmaIgTHnkuj/DpEjY3OBhdZKokk+WhlRAWX+QnK8uyMuFo7V9qcBTKz88BNWjx8fEANGcAIl7/yDmH1csAMWkAMGX/xDsaQmwAMWUAK2IAMGnBxMwAJ2EAKWr/yjgAK2kAIGwAIF0AJWAALWQAJ2vxwD5AUGIAGVkAI2uzlE5dX2B4wb2V1M7bskKDeFcAHFsAHWxUV2IAFVgAC1VbmaIgTHnkuj/DpEjY3OBhdZKokk+WhlRAWX+QnK8uyMuFo7V9qcBTKz8" alt="Logo" />
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