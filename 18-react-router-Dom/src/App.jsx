import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <div>
       <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/About' element = {<About />}/>
        <Route path = '/Contact' element = {<Contact />}/>
      </Routes>
      
    </div>
  )
}

export default App
