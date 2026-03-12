import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import RouteLayout from './components/RouteLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import NodeJs from './components/NodeJs'
import Java from './components/Java'
import Vue from './components/Vue'
import { Navigate } from 'react-router'
function App() {
  
  // Routind configuration
  const routeObj=createBrowserRouter([
    {
      path:"/",
      element:<RouteLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'nodejs',
              element:<NodeJs/>
            },
            {
              path:'vue',
              element:<Vue/>
            },
            {
              path:"",
              element:<Navigate to="java"/>

            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={routeObj}/>
}

export default App
