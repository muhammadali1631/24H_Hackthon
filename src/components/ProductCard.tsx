import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({product, from}: {product: any, from?: string}) => {
  return (
    <div>
      <Link href={product.link}>
        <div className={` sm:w-[295px] sm:h-[298px] bg-[#F2F0F1] rounded-3xl ${from === 'casual'? "w-[150px] h-[150px]" :"w-[200px] h-[200px]"}`}>
        <Image src={product.image} alt='Product' className=''/>
        </div>
        <h3 className={` font-bold  mt-4 ml-2 ${from === 'casual'? 'text-lg w-[100px]': 'text-xl' }`}>{product.title}</h3>
        <div className='space-y-1 flex items-center gap-1 ml-2 '>
            <div className='flex gap-1'>{product.stars.map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))} {product.halfStar && (<product.halfStar className='text-yellow-500'/>)}</div>
            <p>{product.review}<span className='text-gray-500'>{product.outOf}</span></p>
        </div>
        <div className={`flex gap-2 ml-2 ${from === 'casual' &&' sm:gap-[1px] sm:ml-0'}`}>
        <h3 className={` ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>{product.price}</h3>
        {product.orignalPrice && <h3 className={` line-through text-gray-500 ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>{product.orignalPrice}</h3>}
        {product.discount && <p className='pt-[2.5px] px-2 rounded-full text-red-600 bg-red-200'>{product.discount}</p>}
        
        </div>
        </Link>
    </div>
  )
}

export default ProductCard