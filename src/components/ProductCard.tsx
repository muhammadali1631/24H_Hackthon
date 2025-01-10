import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

import React from 'react'
import ProductType from '@/Types/product';
import CartIcon from './CartIcon';

const ProductCard = ({product, from}: {product: ProductType, from?: string}) => {
  return (
    <div className={`sm:w-[295px] ${from === 'casual'? "w-[150px] " :"w-[200px]"} group`}>
        <div className={ `relative sm:w-[295px] sm:h-[298px] bg-[#F2F0F1] rounded-3xl ${from === 'casual'? "w-[150px] h-[150px]" :"w-[200px] h-[200px]"}`}>
          <Link href={`shop/${product.slug.current}`} className='w-full h-full'>
        <Image src={urlFor(product.mainImage).url()} height={280} width={280} alt='Product' className='h-full w-full mix-blend-multiply p-5 object-contain  group-hover:p-1 duration-300'/>
        </Link>
          <div className='absolute bottom-5 hidden w-full justify-center gap-2 group-hover:flex'>
            <CartIcon id={product._id}/>
          </div>
        </div>
        <h3 className={`line-clamp-2 font-bold  mt-4 ml-2 ${from === 'casual'? 'text-lg w-[100px]': 'text-xl' }`}>{product.title}</h3>
        <div className='space-y-1 flex items-center gap-1 ml-2 '>
            <div className='flex gap-1'>{Array(Number(product.rating?.toString().charAt(0))).fill(FaStar).map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))} {product.rating?.toString().charAt(2) === '5' && (<FaStarHalf className='text-yellow-500'/>)}</div>
            <p>{product.rating}<span className='text-gray-500 mx-[1px]'>/5</span></p>
        </div>
        <div className={`flex gap-2 ml-2 ${from === 'casual' &&' sm:gap-[1px] sm:ml-0'}`}>
        <h3 className={` ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>${product.discount? product.sizes[0].price - (product.sizes[0].price * product.discount / 100) : product.sizes[0].price}</h3>
        {product.discount && <h3 className={` line-through text-gray-500 ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>{product.sizes[0].price}</h3>}
        {product.discount && <p className='pt-[2.5px] px-2 rounded-full text-red-600 bg-red-200'>-{product.discount}%</p>}
        
        </div>
    </div>
  )
}

export default ProductCard