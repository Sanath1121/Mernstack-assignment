import React from 'react'
import { NavLink } from 'react-router'
function Footer() {
  return (
    <div className="bg-gray-800 text-white p-5 flex justify-center items-center mb-0 mt-auto">
      <div>
        <ul>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer