import React, { use, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  
  function increasenum(){
    setNum(num+1)
  }
  function decreasenum(){
   setNum(num-1)
  }
  function jump5(){
    setNum(num+5)
  }
  function minus5(){
    setNum(num-5)
  }
  return (
    <div>
      <h1 >{num}</h1>
      <button onClick = {increasenum}>increase</button>
      <button onClick = {decreasenum} >decrease</button>
      <button onClick = {jump5} >increase 5</button>
    </div>
  )
}

export default App



