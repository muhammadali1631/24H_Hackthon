import React from 'react'
// import {products} from '@/data/product'
import Image from 'next/image'
import Counter from '@/components/Counter'
import { IoIosArrowForward } from "react-icons/io";
import Tabs from '@/components/Tabs';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FaStar, FaStarHalf } from 'react-icons/fa6';
import ProductDetails from '@/components/ProductDetails';
const sizes = ['Small', 'Medium', 'Large', 'X-Large']
interface productType {
    name?: string;
    title?: string;
    description?: string;
    images?: [];
    rating?: number;
    sizes?: [];
    mainImage?: {};
    discount?: number;
    colors?: string[];
    tags?: string[];
    slug?: {};

}
const page = async({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) => {

      
    
        const slug = (await params).slug
          const product = await client.fetch(`*[_type == 'product' && slug.current == $slug][0]`, {slug})
          return (
        <div className='px-3 sm:px-16'>
            <h1 className='flex items-center'>Home <IoIosArrowForward/> Shop <IoIosArrowForward/>{product.name  }</h1>
            
            <ProductDetails product={product}/>

            <Tabs/>
        </div>
      )
}

export default page