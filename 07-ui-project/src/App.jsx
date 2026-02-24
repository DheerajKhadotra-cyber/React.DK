import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'



const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'violet',
      tag:'Underserved',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661749996118-799eff98b27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'green',
      tag:'Underbanked',
    },
    {
      img:'https://images.unsplash.com/photo-1732210038531-9cefab37885a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'pink',
      tag:'Average'

    }
  ]
  return (
    <div >
      <Section1 users = {users}/>
      <Section2 />
      
    </div>
  )
}

export default App
