import React, { useMemo, useState } from 'react'


const App = () => {

  const [count,setCount] = useState(0)

 let num1 =20;
 let num2 =15;

  const sum = useMemo(
    ()=>{
      return num1+num2

    },[num1,num2]
  )
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Counter-{count}</button>
      <h1>Sum -{sum}</h1>
    </div>
  )
}

export default App

