import React from 'react'

function TasksCount({tasks}) {

    console.log(tasks)
  return (
    <div>
        <h1 className='text-2xl text-purple-600 mb-3'>TasksCount</h1>
        <p>{tasks.length}</p>
    </div>

  )
}

export default TasksCount