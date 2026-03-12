import {useState} from "react"

function StateDemo(){
    let [counter,setCounter]=useState(10)
  let [marks,setMarks]=useState([1,2,3,4])
  let [users,setUsers]=useState({
    email:"Sanath@gmail.com"
  })

  const updateUser=()=>{
    setUsers({...users, city:"Hyderabad"})
  }

  const deleteUser=()=>{
    let {city,...rest}=users;
    setUsers(rest)
  }

  const addMarks=()=>{
    setMarks([123, ...marks]);
  };

  const deleteMark=()=>{
    setMarks(marks.filter((m,i)=>i!=0))
  }
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
      
      <h3>Marks: {
      marks.map((m,i)=> <p key={i}>{m}</p> )
      }</h3>
      <button onClick={addMarks} className='bg-amber-200 p-3 m-5'>Add Marks</button>
      <br />
      <button onClick={deleteMark} className='bg-amber-200 p-3 m-5'>Delete marks</button>
      <br />

      <h3>Users <br /> {Object.values(users).join(',\n')  }</h3>
      <button onClick={updateUser} className='bg-amber-200 p-3 m-5'>Update User</button>
      <br />
      <button onClick={deleteUser} className='bg-amber-200 p-3 m-5'>Delet User</button>
      <br />
      </div>
  )
}

export default StateDemo;