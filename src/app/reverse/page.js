"use client"
import React from 'react'

export   const App=()=>{
  const [result,setResult]=React.useState('');
  const [name,setName]=React.useState('')
  const fnChange=(eve)=>{
   setName(eve.target.value)
  }
  
  const fnClick=()=>{
      const reverseName=name.split("").reverse().join("");
      setResult(reverseName);
  }
 
    return <div>
           <p>
            <b>Name: </b><input  onChange={fnChange} />
           </p>
           <p>
            <button onClick={fnClick}>Print Reverse</button>
           </p>
           <h1>{result}</h1>
        </div>
  }

export default App
