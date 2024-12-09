import React from 'react'
import {products} from '@/data/product'
import Image from 'next/image'
import Counter from '@/components/Counter'
import { IoIosArrowForward } from "react-icons/io";
import Tabs from '@/components/Tabs';
import ProductCard from '@/components/ProductCard';
const sizes = ['Small', 'Medium', 'Large', 'X-Large']
const page = async({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) => {
      
      const slug = (await params).slug
      if(products.filter((item)=>item.slug === slug).length === 1){
        const product = products.filter((item)=>item.slug === slug)[0]
          return (
        <div className='px-3 sm:px-16'>
            <h1 className='flex items-center'>Home <IoIosArrowForward/> Shop <IoIosArrowForward/>{product.name  }</h1>
            <div className='flex justify-around flex-wrap'>
                
            <div className='flex gap-4 flex-col-reverse sm:flex-row'>
                <div className='flex sm:block gap-2 justify-around'>
                {Array(3).fill(product.image).map((item, index)=>(
                    <Image src={item} alt='image'  key={index} className='my-2 h-[90px] w-[90px]  sm:h-[150px] sm:w-[150px]'/>
                ))}
                </div>
                <Image src={product.image} alt='image' className='w-[450px]'/>
            </div>
            <div className='w-[330px] sm:w-[400px] md:w-[600px]'>
            <div className='px-2 sm:px-5'>
                <h1 className='text-4xl font-black my-2'>{product.title}</h1>
                <div className='space-y-1 flex items-center gap-1 text-2xl'>
            <div className='flex gap-1'>{product.stars.map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))} {product.halfStar && (<product.halfStar className='text-yellow-500'/>)}</div>
            <p>{product.review}<span className='text-gray-500'>{product.outOf}</span></p>
            
            </div>
            <div className='flex gap-2 ml-2'>
        <h3 className='text-2xl font-bold'>{product.price}</h3>
        {product.orignalPrice && <h3 className='text-2xl font-bold line-through text-gray-500'>{product.orignalPrice}</h3>}
        {product.discount && <p className='pt-[2.5px] px-2 rounded-full text-red-600 bg-red-200'>{product.discount}</p>}
            </div>
                <h3 className='py-3 border-b-2'>{product.desc}</h3>
                    <h3 className='my-2'>Select Color</h3>
                <div className='flex gap-3 border-b-2 pb-4'>
                    <div className={`p-2 rounded-full w-[35px] h-[35px] bg-red-700`}></div>
                    <div className={`p-2 rounded-full w-[35px] h-[35px] bg-green-700`}></div>
                    <div className={`p-2 rounded-full w-[35px] h-[35px] bg-blue-700`}></div>
                </div>
                    <h3 className='my-2'>Select Color</h3>
                <div className='flex gap-1 sm:gap-3 border-b-2 pb-4'>
                    {sizes.map((item, index) => (
                        <button key={index} className={`py-2 px-4  rounded-full ${index == 2? 'bg-black text-white': 'bg-gray-200'}`}>{item}</button>
                    ))}
                </div>
                <div className='flex justify-around my-3 gap-7'>
                    <Counter/>
                    <button className='py-2 px-10 text-white rounded-full bg-black w-[150px] sm:w-[300px]'>Buy Now</button>
                </div>
            </div>
            </div>
            </div>
            <Tabs/>
            <div className='flex justify-center'>
            <button className='text-black border-[1px] py-2 px-14 rounded-full mx-auto'>Load More Reviews</button>
            </div>
            <h2 className="text-4xl font-black text-center my-10">YOU MIGTH ALSO LIKE</h2>

            <div className="flex justify-around gap-3 overflow-x-scroll hide-scrollbar my-6">
            {products.filter(item => item.tags.includes('new')).map((item, idx) =>(
                <ProductCard key={idx} product={item} />
            ))}
            </div>
        </div>
      )
    }else{
        return <div>Product not found</div>
    }
}

export default page