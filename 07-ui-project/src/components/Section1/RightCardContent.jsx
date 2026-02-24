import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className = 'absolute top-0 left-0 h-full w-full  p-8 flex flex-col ' >
            <h2 className = 'bg-white text-2xl py-2 px-3 font-semibold rounded-full h-14 w-14 flex justify-center items center'>{props.id}</h2>
            <div>
            <p className = 'text-shadow-2xs mt-100 leading-6 text-xl leading[relaxed] text-white mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi ipsa dolores numquam blanditiis repellendus quos </p>
            </div>
            <div className = 'flex justify-between -mt-10'>
                <button style={{backgroundColor:props.color}} className = 'text-xl  text-white font-medium px-8 py-3 rounded-full cursor-pointer'>{props.tag}</button>
                <button className = 'text-xl  text-white font-medium px-7  rounded-full cursor-pointer'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
