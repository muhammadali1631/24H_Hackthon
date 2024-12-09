import React from 'react'
import ProductCard from './ProductCard'
import ViewAll from './ViewAll'
import { products } from '@/data/product'

const TopSelling = () => {
  return (
    <div className=" p-4 px-10 my-16">
      <h2 className="text-4xl font-black text-center mb-10">BEST SELLING</h2>
      <div className="flex justify-around gap-3 overflow-x-scroll hide-scrollbar my-6">
        {products.filter(item => item.tags.includes('best')).map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
        <ViewAll/>
    </div>
  )
}

export default TopSelling