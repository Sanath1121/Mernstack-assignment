import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://localhost:5000/user-api/users', {
          method: 'GET'
        })
        if (res.ok) {
          const resObj = await res.json()
          setUsers(resObj.payload)
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`)
  }

  if (loading) {
    return <div className='text-center py-10 text-slate-600'>Loading users...</div>
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-6 text-slate-900'>All Users</h2>
      {users.length === 0 ? (
        <p className='text-slate-600'>No users found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {users.map((user) => (
            <div
              key={user._id}
              onClick={() => handleUserClick(user._id)}
              className='bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-amber-300 cursor-pointer transition-all'
            >
              <h3 className='text-lg font-medium text-slate-800'>{user.name}</h3>
              <p className='text-sm text-slate-600 mt-1'>{user.email}</p>
              <p className='text-xs text-slate-500 mt-2'>Click to view details</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersList