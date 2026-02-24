import React from 'react'
import { useState } from 'react'

const App = () => {


  const [title, settitle] = useState('')


  const Submithandler = (e) =>{


    e.preventDefault()


    console.log('Form Submitted by ', title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit = {(e) => {
        Submithandler(e)
      }

      }>
        <input 
        type = "text" 
        placeholder = 'Enter Name'
        value = {title}
        onChange = {(e)=> {
          settitle(e.target.value);
          
        }}
          />
      
       <button >Submit</button>
      </form>
    </div>
  )
}

export default App
