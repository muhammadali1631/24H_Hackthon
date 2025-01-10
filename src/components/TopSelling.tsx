'use client'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ViewAll from './ViewAll'
import { client } from '@/sanity/lib/client'
import ProductType from '@/Types/product'

const TopSelling = () => {
  const [data, setData] = useState<ProductType[]>([])
  const getData = async( )=>{

    const products:ProductType[] = await client.fetch(`*[_type == 'product'] | order(_createdAt asc)`)
    setData(products)
  }
  getData()
  
  return (
    <div className=" p-4 px-10 my-16">
      <h2 className="text-4xl font-black text-center mb-10">BEST SELLING</h2>
      <div className="flex justify-around gap-3 overflow-x-scroll hide-scrollbar my-6">
        {data.filter(item => item.tags.includes('top')).map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
        <ViewAll/>
    </div>
  )
}

export default TopSelling