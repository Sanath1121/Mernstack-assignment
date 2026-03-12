import React from 'react'
import {NavLink} from 'react-router'
import { Outlet } from 'react-router'
function Technologies() {
  return (
    <div>
        <ul className='flex gap-10 justify-center'>
            <li>
                <NavLink to="/technologies/java">Java</NavLink>
            </li>
            <li>
                <NavLink to="/technologies/nodejs">NodeJS</NavLink>
            </li>
            <li>
                <NavLink to="/technologies/vue">Vue</NavLink>
            </li>
        </ul>
        {/* Place holder for children of technologies */}
        <Outlet/>
    </div>
  )
}

export default Technologies