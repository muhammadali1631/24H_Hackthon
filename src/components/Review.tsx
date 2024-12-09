import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IconType } from 'react-icons';

interface Props {
  review: {
    name: string;
    stars: IconType[];
    desc: string
  }
  count?: number
}

const Review = ({ review, count }: Props) => {
  return (
    <div className=' border-[1px] rounded-2xl p-6  space-y-2'>
      <div className='flex justify-between'>
        <div className='flex gap-1'>{review.stars.map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))}</div>
        {count === 200 && <BsThreeDots />}
      </div>
        <h3 className='flex gap-2 items-center'>{review.name}<FaCheckCircle className='text-green-600'/></h3>
        <p className={`w-[250px] ${count === 200 ? 'sm:w-[440px]':'sm:w-[340px]'}`}>{review.desc}</p>
        {count === 200 &&
        <p>Published on August 14, 2023 </p>
        }
    </div>
  )
}

export default Review