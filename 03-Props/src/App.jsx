import React from 'react'
import Card from "./Components/Card";

const App = () => {
  return (
    <div className='parent'>
    <Card user='Aman' age= {20} img =  'https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
    <Card user='Rahul' age = {18} img = 'https://images.unsplash.com/photo-1764105720554-695f1673fb50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
    

    </div>
    
    // <div className="parent">
    //   {/* <div className="card">
    //     <img src="https://plus.unsplash.com/premium_photo-1754767853559-1ad8f192f41e?q=80&w=804&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    //     <h1>DHEERAJ KHADOTRA</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //     <button>view Profile</button>
      
    //   */}

     
        
    //   </div>
    //   <Card />
    // </div>
  )
}

export default App

