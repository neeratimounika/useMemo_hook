import React, { useEffect, useRef } from 'react'


function Ref() {

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()

  },[])
  return (
    <div>
      <form sub>
        <input type='text' ref={inputRef} placeholder='Enter Username'/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default Ref
