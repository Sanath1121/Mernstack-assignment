import React from 'react'
import { useLocation } from 'react-router'
function Product() {
  const {state}=useLocation()
  console.log(state.product) 
  return (
    <div className='flex gap-10 p-10 '>
      <div className='flex h-max'>
        <img src={state?.product?.image} alt={state?.product?.title} className="w-500 h-100 object-contain" />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>{state?.product?.title}</h1><br />
        <p>Category: {state?.product?.category}</p>
        <br />
        <p>Description: <br />{state?.product?.description}</p>
        <br />
        <h2 className='italic'> &nbsp; &nbsp; Price: ${state?.product?.price}</h2><br />
        <p className='text-text-1'>Rating: {state?.product?.rating?.rate} ({state?.product?.rating?.count} reviews)</p>
      </div>
    </div>
  )
}

export default Product