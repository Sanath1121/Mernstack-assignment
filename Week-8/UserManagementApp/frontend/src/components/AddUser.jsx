import React from 'react'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {useNavigate} from 'react-router'

function AddUser() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onUserCreate = async (userObj) =>{
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/user-api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create user')
      }

      reset()
      navigate('/userslist')
    } catch (error) {
      setError('root', { message: error.message })
    } finally {
      setLoading(false)
    }
  }
  const {register, handleSubmit, setError, reset, formState: { errors }} = useForm()
  return (
    <div className='flex items-center justify-center py-6'>
      <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm' onSubmit={handleSubmit(onUserCreate)}>
        <h2 className='text-2xl font-semibold text-slate-800 mb-6 text-center'>Add New User</h2>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-slate-700 mb-1'>Name</label>
          <input className="w-full p-2 rounded border-2 border-slate-300 bg-blue-50 focus:border-blue-500 focus:outline-none" type="text" {...register('name')} placeholder='Enter name'/>
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-slate-700 mb-1'>Email</label>
          <input className="w-full p-2 rounded border-2 border-slate-300 bg-blue-50 focus:border-blue-500 focus:outline-none" type="email" {...register('email')} placeholder='Enter email'/>
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-slate-700 mb-1'>Date of Birth</label>
          <input className="w-full p-2 rounded border-2 border-slate-300 bg-blue-50 focus:border-blue-500 focus:outline-none" type="date" {...register('dateOfBirth')}/>
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-slate-700 mb-1'>Mobile Number</label>
          <input className="w-full p-2 rounded border-2 border-slate-300 bg-blue-50 focus:border-blue-500 focus:outline-none" type="tel" {...register('mobileNo')} placeholder='Enter mobile number'/>
        </div>
        
        {errors.root?.message && <p className='text-red-600 text-sm mb-3'>{errors.root.message}</p>}
        
        <button className="w-full p-2 rounded border-2 bg-blue-700 text-white font-medium cursor-pointer hover:bg-blue-800 disabled:bg-blue-400" type='submit' disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>
    </div>
  )
}

export default AddUser