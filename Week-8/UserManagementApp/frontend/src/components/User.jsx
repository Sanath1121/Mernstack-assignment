import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

function User() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`http://localhost:5000/user-api/users/${id}`, {
          method: 'GET'
        })
        const data = await res.json()
        if (res.ok) {
          setUser(data.payload)
        } else {
          setError(data.message || 'User not found')
        }
      } catch (err) {
        setError('Failed to fetch user details')
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [id])

  if (loading) {
    return <div className='text-center py-10 text-slate-600'>Loading user details...</div>
  }

  if (error) {
    return (
      <div className='text-center py-10'>
        <p className='text-red-600 mb-4'>{error}</p>
        <button onClick={() => navigate('/userslist')} className='px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700'>Back to Users</button>
      </div>
    )
  }

  return (
    <div className='bg-white border border-slate-200 rounded-lg p-6 shadow-sm max-w-lg mx-auto'>
      <h2 className='text-2xl font-semibold text-slate-900 mb-4'>User Details</h2>
      <div className='space-y-3'>
        <div>
          <span className='text-sm text-slate-500'>Name</span>
          <p className='text-lg text-slate-800'>{user?.name}</p>
        </div>
        <div>
          <span className='text-sm text-slate-500'>Email</span>
          <p className='text-lg text-slate-800'>{user?.email}</p>
        </div>
        <div>
          <span className='text-sm text-slate-500'>Date of Birth</span>
          <p className='text-lg text-slate-800'>{user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A'}</p>
        </div>
        <div>
          <span className='text-sm text-slate-500'>Mobile Number</span>
          <p className='text-lg text-slate-800'>{user?.mobileNo || 'N/A'}</p>
        </div>
      </div>
      <button onClick={() => navigate('/userslist')} className='mt-6 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700'>Back to Users</button>
    </div>
  )
}

export default User