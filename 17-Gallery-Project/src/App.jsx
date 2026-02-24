import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  
  const [userdata, setuserData] = useState([]);
  const [index, setIndex] = useState(1)


  
  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setuserData(response.data);
   
  }


 
  useEffect(function(){
    getData()
  },[index])
    let printUserData =<h3 className =' text-gray-300 text-xs semi-bold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2' > Loading....</ h3>
    if(userdata.length>0){
      printUserData = userdata.map(function(elem,idx){
        
        return <div key = {idx}>
          <Card elem = {elem} />
        </ div>
      })
    }
  
  return (
    <div className='bg-white overflow-auto text-white p-4 h-screen'>
      {/* <button onClick = {getData}+++_
      className='bg-green-600 text-white px-5 active:scale-95 mb-3 py-2 rounded'>
        Get Data
        </button> */}
        {/* <h1 className = 'text-red-500 fixed   text-6xl'>{index}</h1> */}
        <div className = 'flex h-[82%] flex-wrap gap-4'>
          {printUserData}
        </div>
        <div className = 'flex justify-center mt-8 items-center gap-25 '>
          <button style = {{opacity: index == 1 ? 0.5 :1}}
          onClick = {()=>{
            if(index>1){
              setuserData([])
            setIndex(index-1)
          }}} 
          className = ' bg-amber-400 font-bold px-6 py-3.5 rounded text-xs cursor-pointer active:scale-95 shadow-2xl'>Prev</button>
          <h1 className = ' bg-amber-900 font-bold px-6 py-3.5 rounded text-xs cursor-pointer active:scale-95 shadow-2xl'>Page {index}</h1>
          <button onClick = {()=>{
            setuserData([])
            setIndex(index+1)
          }} 
          className = 'bg-amber-400 font-bold px-6 py-3.5 rounded text-xs cursor-pointer active:scale-95 shadow-2xl'>Next</button>
          
        </div>
    </div>
  )
}

export default App
