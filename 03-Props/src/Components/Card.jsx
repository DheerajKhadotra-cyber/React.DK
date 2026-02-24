import React from 'react'

const Card = (props) => {
  
  

      return(<div className="card">
        <img src={props.img}  />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view Profile</button>
    </div>
      )


}

export default Card


