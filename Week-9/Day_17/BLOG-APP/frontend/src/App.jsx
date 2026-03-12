import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import RootLayout from './components/RootLayout'
import UserDashboard from './components/UserDashboard'
import AuthorDashboard from './components/AuthorDashboard'
import AdminDashboard from './components/AdminDashboard'
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true, //this means its the default component to be rendered when the path is '/'
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
    {
      path:'/user-profile',
      element:<UserDashboard />
    },
    {
      path:'/author-profile',
      element:<AuthorDashboard />
    },
    {
      path:'/admin-profile',
      element:<AdminDashboard />
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App
