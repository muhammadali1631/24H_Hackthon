'use client'
import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='flex gap-6 text-2xl py-2 px-6 items-center bg-gray-200 rounded-full'>
        <button onClick={()=>setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter