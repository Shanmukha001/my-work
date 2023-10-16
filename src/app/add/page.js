"use client"
import React from 'react'

export    const App=()=>{
  const [result,setResult]=React.useState('');
  const [data,setData]=React.useState({})
  const [clr,setClr]=React.useState('')
  const fnChange=(eve)=>{
    const {id,value}=eve.target;
    setData({
      ...data,
      [id]:value
    })
  }
  const fnClick=(opt)=>{
      const {n1,n2}=data
      const sum=parseInt(n1)+parseInt(n2)
      setResult(sum)
      setClr(sum>100 ? 'red' : 'blue')
  }
 
    return <div>
           <p>
            <b>No1: </b><input id='n1' type="number" onChange={fnChange} />
           </p>
           <p>
            <b>No2: </b><input id='n2' type="number" onChange={fnChange} />
           </p>
           <p>
            <button onClick={fnClick}>ADD</button>
           </p>
           <h1 style={{color:clr}}>{result}</h1>
        </div>
  }

export default App;
