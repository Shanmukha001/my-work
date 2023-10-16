"use client"
import React from 'react'

export     const App=()=>{
  const [result,setResult]=React.useState('');
  const [no,setNo]=React.useState('')
  const fnChange=(eve)=>{
    setNo(eve.target.value)
  }
  const fnCheckPrime=(num)=>{
    if (num < 2) { 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
  }
  const fnClick=()=>{
    const isPrime=fnCheckPrime(no);
    setResult(isPrime ? 'Prime':'Not Prime')
  }
 
    return <div>
           <p>
            <b>No: </b><input type="number" onChange={fnChange} />
           </p>
           <p>
            <button onClick={fnClick}>Check Prime</button>
           </p>
           <h1>{result}</h1>
        </div>
  }


export default App