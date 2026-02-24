import React from 'react'

const App = () => {
  const pagescrolling=() => {
    console.log('page scrolling.....');
  }
  return (
    <div onWheel = {pagescrolling}>
      <div className = 'page1'></div>
      <div className = 'page2'></div>
      <div className = 'page3'></div>
    </div>
  )
}

export default App

