import React from 'react'

function TaskList({tasks}) {

  return (
    <div>
        <h1 className='text-2xl text-purple-600 mb-3'>TaskList</h1>
        {tasks.length===0 ? 
        <p><i>Tasks are empty</i></p> : 
        <div className='mb-10'>
            {
                tasks.map((taskObj,index)=> <p key={index}>{taskObj.newTask}</p> )
            }
        </div>
        }
    </div>
  )
}

export default TaskList