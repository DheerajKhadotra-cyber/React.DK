
import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
 const [title, settitle] = useState('');
 const [details, setDetails] = useState('')

 const [task, setTask] = useState([])



  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask);
    
    
    

    settitle('')
    setDetails('')
  }
 

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
    
  }
  return (
    <div className = "h-screen lg:flex  bg-slate-700 text-white">
      
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }}      
       className = 'flex  items-start lg:w-1/2 flex-col gap-4 p-10 '>
       <h1 className = 'text-4xl  font-bold'>Add Notes </h1>


        {/* PEHLA INPUT FOR HEADING */}
        <input 
        type = "text" 
        placeholder = "Enter Notes Heading" 
        className= "cursor-pointer font-medium  text-start flex px-5 w-full items-start py-2 h-8 border-2 outline-none  text-white rounded "
        value = {title}
        onChange = {(e)=>{
          settitle(e.target.value);
          
        }}
        />



        {/* DETAILED WALA INPUT */}
      <textarea
        type = "text"
        placeholder = "Write Details here"
        className = " px-5 py-2 w-full flex text-start border-2 h-32  outline-none cursor-pointer text-white  rounded"
        value = {details}
        onChange = {(e)=>{
          setDetails(e.target.value)
        }}
      />
      <button className = "text-black active:scale-95 cursor-pointer bg-white px-5 py-2 border-2 w-full outline-none h-10 rounded">Add Notes</button>
      
     
      </form>
      <div className = " lg:w-1/2  text-white lg:border-l-2 p-10">
      <h1 className = 'text-4xl font-bold'>Recent Notes</h1>
      <div className = 'flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
       {task.map(function(elem,idx) {
        return <div key = {idx} className = "h-65 flex items-start justify-between flex-col relative w-50 rounded-xl items-right text-slate-900  pt-9 pb-3 px-8 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-center shadow-xl">
          
         <h3 className='leading-tight text-lg text-slate-700 font-bold'>{elem.title}</h3>
           <p className='mt-2 leading-tight text-xs font-semibold text-slate-600'>{elem.details}</p>
          
          <button onClick = {() => {
            deleteNote(idx)
          }} className = 'rounded active:scale-95 w-full cursor-pointer h-6.75 text-xs  font-bold text-white bg-red-600 '>Delete </button>
        </div>
        
       
       })}
     
        
      
        </div>
      </div>
    </div>
  )
}

export default App
