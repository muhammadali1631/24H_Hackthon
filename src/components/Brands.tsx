import React from 'react'
import versace from '@/images/versace.png'
import zara from '@/images/zara.png'
import gucci from '@/images/gucci.png'
import prada from '@/images/prada.png'
import calvin from '@/images/calvin.png'
import Image from 'next/image'

const brandsImage = [versace, zara,gucci, prada, calvin]
const Brands = () => {
  return (
    <div className='bg-black flex justify-around py-10 px-5 flex-wrap gap-4'>
        {brandsImage.map((item, index)=>(
            <Image key={index} src={item} alt='Brand Image'/>
        ))}
    </div>
  )
}

export default Brands