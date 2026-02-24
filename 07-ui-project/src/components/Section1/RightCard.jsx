import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    
      <div className= ' h-full w-95  flex shrink-0 overflow-hidden relative rounded-4xl '>
        <img className = 'h-full w-full object-cover' src={props.img}  alt="" />
        <RightCardContent tag = {props.tag} color = {props.color} id = {props.id+1}/>
      </div>
    
  )
}

export default RightCard
