'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { client } from '@/sanity/lib/client';
import ProductType from '@/Types/product';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';


const page = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [Products, setProducts] = useState<ProductType[]>([])
    const [count, setCount] = useState(1);
  
  
    useEffect(() => {
      const storedCart = localStorage.getItem("cartItem");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);
  
    useEffect(() => {
      if(cart.length !== 0){
        localStorage.setItem("cartItem", JSON.stringify(cart));
      }
      const getProduct = async()=>{
        const product:ProductType[] = await client.fetch(`*[_type == 'product']`)
        const filteredProducts = product.filter((item)=> cart.includes(item._id))
        setProducts(filteredProducts)
        const totalPrice = Products.reduce((sum, item) => {
          // Check if 'sizes' property exists and is an object
          if (item && typeof item.sizes[0] === 'object' && item.sizes !== null && 'price' in item.sizes[0]) {
              return sum + item.sizes[0].price;
          }
          return sum; // Return the current sum if sizes or price is not valid
        }, 0);
        console.log(totalPrice)
      }
      getProduct()
    }, [cart]);
    const delCart = (id: string) => {
      const updatedCart = cart.filter((item) => item !== id);
      setCart(updatedCart);
      if (updatedCart.length === 0) {
        localStorage.setItem("cartItem", JSON.stringify([]));
      }
    };
    
  return (
    <div className=" px-3 sm:px-16 ">
        <h1 className='flex  items-center gap-3  ml-1 mt-8 '> Home <SlArrowRight/> Cart </h1>
      <h1 className="text-4xl  ml-1 mt-10 font-bold mb-5">Your Cart</h1>

      <div className="flex justify-around flex-wrap gap-5 ">
        <div className="flex flex-col gap-6 border mb-10 rounded-xl ml-1  w-[700px]  sm:p-5 p-2">
          {Products.map((item, index) => (
            <div key={index} className={`flex gap-4 border-b-2 py-2 ${index === 2 ? 'border-b-0 ': 'border-b-2 '}`}>
              <Link href={`shop/${item.slug.current}`}>
              <Image src={urlFor(item.mainImage).url()} height={112} width={112} alt={item.name} className="w-24 sm:w-28 sm:h-28  border rounded  object-cover" />
              </Link>
              <div className="flex-1">

                <h2 className="flex text-md sm:text-lg font-semibold justify-between line-clamp-2">{item.title} < RiDeleteBin6Fill className='text-red-600  text-2xl sm:text-3xl w-10' onClick={()=> delCart(item._id)}/></h2>
                {/* <p className="text-gray-600">Size: {item.size},<br /> Color: {item.color}</p> */}
                <div className='flex justify-between items-center'>
                <p className="text-xl font-semibold">${item.sizes[0].price * count} </p>
                <div
            className={`flex  text-2xl items-center bg-gray-200 rounded-full py-2 px-6 gap-6`}
          >
            <button onClick={() => setCount(count === 1 ? 1 : count -1  )}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
                </div>
               
              </div>
            </div>
          ))}
        </div>
        

        <div className="  p-6 border ml-2  rounded-xl  flex flex-col h-[450px] w-[400px] ">
          <h2 className="text-xl font-semibold mb-9">Order Summary</h2>
          <div className="flex mb-5  justify-between ">
            <p>Subtotal</p>
            <p>$nan</p>
          </div>
          <div className="flex mb-5 justify-between ">
            <p>Discount (20%)</p>
            <p className=' text-red-600'>-$113</p>
          </div>
          <div className="flex mb-5 justify-between ">
            <p>Delivery Fee</p>
            <p >$15</p>
          </div>
          <hr className="my-4" />
          <div className="flex mb-4 justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">$467</p>
          </div>
          <div className="flex gap-2 sm:gap-4 mt-4">
            <input type="text" placeholder=" Add promo code" className="border border-gray-300 w-[150px] sm:w-[300px] px-2  rounded-3xl" />
            <button className="bg-black  text-white font-bold py-2 sm:px-6 px-3 rounded-3xl">Apply</button>
          </div>
          <button className="bg-black text-white font-bold py-2 flex justify-center items-center gap-2  rounded-3xl sm:mt-10 mt-2">Go to Checkout <FaArrowRight/> </button>
        </div>
      </div>
      
    </div>
  );
};

export default page;