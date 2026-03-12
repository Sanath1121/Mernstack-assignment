import React from 'react'
import TaskList from './TaskList';
import TasksCount from './TasksCount';
import AddTask from './AddTask';
import {useState} from "react"

function TaskManager() {
    let[tasks,setTasks]=useState([]);

    //add new task
    const addNewTask=(taskObj)=>{
        setTasks([...tasks,taskObj])
    }

  return (
    <div className='bg-gray-300'>
        <h1 className='mb-5 text-5xl text-blue-500'>TaskManager</h1>
        <div className='flex justify-around'>
            <AddTask addNewTask={addNewTask}/>
            <TaskList tasks={tasks}/>
            <TasksCount tasks={tasks}/>
        </div>
    </div>
    
  )
}

export default TaskManager