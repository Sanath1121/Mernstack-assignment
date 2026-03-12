import './App.css'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import ContactUs from './components/ContactUs'
import {RouterProvider, createBrowserRouter} from 'react-router'
import RootLayout from './components/RootLayout'

function App() {
  const routeObj=createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path:'',
          element: <Home/>
        },
        {
          path: 'productList',
          element: <ProductsList />
        },
        {
          path: 'product',
          element: <Product />
        },
        {
          path: 'contactus',
          element: <ContactUs />
        }
      ]
    }
  ])
  return (<RouterProvider router={routeObj}/>)
}

export default App
