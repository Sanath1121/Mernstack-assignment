import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function ProductsList() {
let [products,setProducts]=useState([])
let[loading,setLoading]=useState(false)
let[error,setError]=useState('')
const navigate=useNavigate()
const goToProduct=(productObj)=>{
  navigate('/product', {state: {product:productObj}})
}

useEffect(()=>{
  async function getFunction() {
    setLoading(true)
    try {
      let res=await fetch('https://fakestoreapi.com/products')
      if(res.status===200){
        let data=await res.json()
        setProducts(data)
        console.log(data)
      }
      else{
        throw new Error("Failed to fetch products")
      }
    } catch (error) {
      console.log("error fetching", error)
      setError(error) 
    }
    finally{
      setLoading(false)
    }
  }

  getFunction()
},[])  
  if(loading){
    console.log("Loading...")
    return <h1>Loading...</h1>
  }
  if(error){
    console.log("Error fetching data", error)
    return <h1>Something went wrong: {error.message || String(error)}</h1> 
  }
    return (
      <div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => goToProduct(product)} className="shadow border-blue-300 border-4 rounded-2xl text-center p-2 cursor-pointer">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
            <h4 className="text-lg font-semibold">{product.title}</h4>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
      </div>
  )

}

export default ProductsList