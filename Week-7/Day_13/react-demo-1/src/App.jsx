import './App.css'
import 'tailwindcss'
import {useState} from "react"
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import StateDemo from './components/StateDemo';

function App(){
  //state
  let [counter,setCounter]=useState(10)

  const increment = () =>{
    setCounter(counter+1)
  }

  const decrement = ()=>{
    setCounter(counter-1)
  } 

  const reset=()=>{
    setCounter(counter=0)
  }
  //State of the component (optional)
  return(
    <div className='text-center bg-gray-300'>
      <h1 className='text-6xl text-blue-400 '>
        State Demo
      </h1>
      <br />
      <h3>Counter {counter}</h3>
      <button onClick={increment} className='bg-amber-200 p-3 m-5'>Counter Up</button>
      <br />
      <button onClick={decrement} className='bg-amber-200 p-3 m-5'>Counter Down</button>
      <br />
      <button onClick={reset} className='bg-amber-200 p-3 m-5'>Reset</button>

    </div>
  )

}

export default App;

// Update marks state by adding marks un the beginning, ending, in the middle with index
// Delete marks from the end of the array