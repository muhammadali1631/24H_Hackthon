'use client'
import React, { useState } from 'react'


const Counter = ({from}:{from?:string}) => {
    const [count, setCount] = useState(0)
  return (
    <div className={`flex  text-2xl items-center bg-gray-200 rounded-full ${from === 'cart' ?' px-1 py-1 sm:px-3 sm:py-2 gap-3 sm:gap-6': 'py-2 px-6 gap-6'}`}>
        <button onClick={()=>setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter