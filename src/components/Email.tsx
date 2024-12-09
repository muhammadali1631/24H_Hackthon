import React from 'react'
import { LuMail } from "react-icons/lu";

const Email = () => {
  return (
    <div className='h-[250px] md:h-[150px] w-[94vw] sm:w-[86vw] absolute bg-black top-[-125px] md:top-[-75px] mx-[3vw] sm:mx-[7vw] rounded-3xl justify-around flex flex-col md:flex-row items-center '>
        <h1 className='text-white text-3xl sm:text-4xl font-black w-[300px] sm:w-[500px]'>STAY UPTO DATE ABOUT OUR LATEST OFFER</h1>
        <div className='flex flex-col gap-2'>
            <div className='bg-white flex items-center px-3 rounded-full py-1 gap-3'>
                <LuMail className='text-xl'/>
                <input type="text"  className='w-[200px] sm:w-[250px] h-8 outline-none' placeholder='Enter Your Email Address'/>
            </div>
            <button className='bg-white flex px-8 sm:px-16 h-10  text-center rounded-full py-2 text-lg'>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default Email