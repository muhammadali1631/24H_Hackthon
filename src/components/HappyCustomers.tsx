import { reviews } from '@/data/reviews';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Review from './Review';
const HappyCustomers = () => {
  return (
    <div className='my-16'>
        <div className='flex justify-between items-center px-5 sm:px-16'>
            <h1 className='font-black text-4xl'>OUR HAPPY CUSTOMERS</h1>
            <div className='flex gap-5'> <FaArrowLeft className='text-xl' /> <FaArrowRight className='text-xl'/></div>
        </div>
        <div className='flex gap-3 mt-10 overflow-x-scroll hide-scrollbar justify-around sm:justify-center px-2'>
            {reviews.map((review, index)=>(
                <Review key={index} review={review}/>
            ))}
        </div>
    </div>
  )
}

export default HappyCustomers