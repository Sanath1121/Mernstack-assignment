import React from 'react'

function Home() {
  return (
    <div className='bg-white border border-slate-200 rounded-lg p-8 shadow-sm max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-6 text-slate-900 text-center'>Welcome to the User Management Portal</h1>
      
      <p className='text-slate-700 leading-7 text-center mb-8 max-w-2xl mx-auto'>
        This administrative portal is designed to streamline your user management workflows. With a clean interface and robust backend integration, you can efficiently manage your user directory, register new profiles, and maintain accurate records in real time.
      </p>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t border-slate-100 pt-8'>
        <div className='p-5 border border-slate-150 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-250'>
          <div className='text-3xl mb-3'>👤</div>
          <h3 className='font-semibold text-slate-800 mb-2'>Register Users</h3>
          <p className='text-sm text-slate-600 leading-relaxed'>Quickly register new users with built-in validation for names, email addresses, dates of birth, and contact numbers.</p>
        </div>
        
        <div className='p-5 border border-slate-150 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-250'>
          <div className='text-3xl mb-3'>📋</div>
          <h3 className='font-semibold text-slate-800 mb-2'>User Directory</h3>
          <p className='text-sm text-slate-600 leading-relaxed'>Browse your entire database of users in a responsive grid. Access individual profiles with a single click.</p>
        </div>
        
        <div className='p-5 border border-slate-150 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-250'>
          <div className='text-3xl mb-3'>⚙️</div>
          <h3 className='font-semibold text-slate-800 mb-2'>Manage Profiles</h3>
          <p className='text-sm text-slate-600 leading-relaxed'>Drill down into individual user details. Perform real-time profile updates or delete records securely.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
