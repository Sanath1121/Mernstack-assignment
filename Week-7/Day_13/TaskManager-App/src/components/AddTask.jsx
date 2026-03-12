import React from 'react'
import {useForm} from 'react-hook-form'

function AddTask({addNewTask}) {
    const {register,handleSubmit,reset}=useForm();
    const onFormSubmit=(taskObj)=>{
        console.log(taskObj);
        addNewTask(taskObj);
        reset()
    };
  return (
    <div>
        <h1 className='text-2xl text-purple-600 mb-3'>AddTask</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
                <input type="text" {...register("newTask",{required:true})} className='p-2 border text-center mb-3' placeholder='Enter new task'/>
            </div>
            <div>
                <button type='submit' className='mb-3 border bg-green-400 px-2'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddTask