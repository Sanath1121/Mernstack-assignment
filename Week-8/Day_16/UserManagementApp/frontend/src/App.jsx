import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Header from './components/Header'
import { Outlet } from 'react-router'
import RootLayout from './components/RootLayout'
import UsersList from './components/UsersList'
import AddUser from './components/AddUser'
import User from './components/User'

function App() {
  const routeObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<UsersList/>
        },
        {
          path:'/add',
          element:<AddUser/>
        },
        {
          path:'/user/:id',
          element:<User/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routeObj}/>
  )
}

export default App
