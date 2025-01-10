import Link from 'next/link'
import React from 'react'

const ViewAll = () => {
  return (
    <div className='flex justify-center'>
      <Link href={'/casual'}>
        <button className='text-black border-[1px] py-2 px-14 rounded-full hover:bg-black hover:text-white duration-300 font-bold'>View All</button>
      </Link>
    </div>
  )
}

export default ViewAll