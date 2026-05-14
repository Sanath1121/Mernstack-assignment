import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import User from './components/User'

function App() {
  const routerObj = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout />,
      children:[
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'adduser',
          element: <AddUser />
        },
        {
          path: 'userslist',
          element: <UsersList />
        },
        {
          path: 'user/:id',
          element: <User/>
        }
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}
export default App
