import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='Right'  className = 'h-full p-6 w-2/3  overflow-x-auto round-4xl flex flex-nowrap gap-10'>
      {props.users.map(function(elem,idx){
        return <RightCard key = {idx} id = {idx} img = {elem.img} color = {elem.color} tag = {elem.tag} />
      })} 
      

     
    </div>
  )
}

export default RightContent
