import { reviews } from '@/data/reviews'
import React from 'react'
import Review from './Review'
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";


const Tabs = () => {
  return (
    <div className="font-sans p-4 w-[100%]">
    <ul className="flex">
        <li 
            className="text-center w-[33%] tab text-gray-500 font-bold text-[15px] py-2.5 border-b-2 border-gray-300 cursor-pointer">
            Product Details</li>
        <li
            className="text-center w-[33%] tab text-black font-semibold text-[15px] py-2.5 border-b-2 border-black cursor-pointer">
            Rating & Reviews</li>
        <li 
            className="text-center w-[33%] tab text-gray-500 font-semibold text-[15px] py-2.5 border-b-2 border-gray-300 cursor-pointer">
            FAQs</li>
    </ul>
    <div className='flex justify-between px-0 sm:px-6 my-4'>
        <h1 className='text-black text-sm sm:text-xl font-semibold'>All Reviews <span className='text-gray-300 text-base font-medium'>{'(451)'}</span></h1>
        <div className='flex gap-3'>
        <VscSettings className='bg-gray-200 text-black h-9 w-9 rounded-full p-1'/>
        <button className='bg-gray-200 hidden sm:flex px-4 py-2 rounded-full  items-center gap-2'>Latest <IoIosArrowDown/></button>
        <button className='bg-black text-white px-4 py-2 rounded-full flex items-center gap-2'>Write a review</button>
        </div>
    </div>
    <div className='flex justify-around gap-10 mt-10 flex-wrap'>
            {reviews.map((review, index)=>(
                <Review key={index} review={review} count={200} />
            ))}
        </div>
</div>
  )
}

export default Tabs