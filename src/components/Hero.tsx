import Image from 'next/image'
import React from 'react'
import heading from '@/images/heading.png'
import image from '@/images/mainImage.png'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] pt-14 px-8 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start relative">
      <div className="lg:w-1/2 flex flex-col items-start space-y-6 mb-0 lg:mb-16">
        <Image src={heading} alt='Heading' className='w-[450px] object-contain'/>
        <p className="text-gray-600 text-sm lg:text-base">
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </p>
        <Link href={'/casual'}>
        <button className="bg-black text-white text-sm lg:text-base font-medium px-10 py-3 rounded-full hover:bg-gray-800">
          Shop Now
        </button>
        </Link>
      </div>
      <div className=' flex flex-col items-center gap-5 my-5 md:hidden'>
        <div className='flex'>
          <div className='px-5 border-r-2'>
            <h3 className='text-3xl font-bold'>200+</h3>
            <p>Internation Brands</p>
          </div>
          <div className='px-5 '>
            <h3 className='text-3xl font-bold'>2,000+</h3>
            <p>High-Quality Products</p>
          </div>
        </div>
          <div className='px-5 '>
            <h3 className='text-3xl font-bold'>30,000+</h3>
            <p>Happy Customers</p>
          </div>
      </div>
      <div className="lg:w-1/2 flex justify-center  lg:mt-0 ">
        <Image
          src={image}
          alt="models"
          className="rounded-md object-cover max-w-full"
        />
      </div>
    </section>
  )
}

export default Hero