import React from 'react'

const Card = (props) => {
   
   
  return (
    <div>
      <a href={props.elem.url} target = '_blank'> 
        <div className = 'h-40 w-44 overflow-hidden rounded-xl bg-white' >
          <img className = 'h-full w-full object-cover' src={props.elem.download_url} alt="" />
        </div>
        <h1 className = 'text-black text-xs font-medium shadow-2xl '>{props.elem.author}</h1>
        </a>
    </div>
  )
}

export default Card

