import './App.css'
import 'tailwindcss'
import {useState} from "react"
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import StateDemo from './components/StateDemo';
import FormDemo  from './components/FormDemo';
import TaskManager from './components/TaskManager';
import TaskList from './components/TaskList';
import TasksCount from './components/TasksCount';
import AddTask from './components/AddTask';
import SideEffects from './components/SideEffects';

function App(){
  
  return(

    <div className='text-left'>
      <TaskManager/>
    </div>
  )
  

}

export default App;

// Update marks state by adding marks un the beginning, ending, in the middle with index
// Delete marks from the end of the array