'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from '@/images/logo.png'
import { RxCross2 } from "react-icons/rx";
import SearchBar from './SearchBar';
import CartPageIcon from './CardPageIcon';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [attr, setAttr] = useState('hidden')
  const [attr2, setAttr2] = useState('block')

  const handleToggle = () => {
    setAttr(isOpen? 'hidden' : 'block')
    setAttr2(isOpen? 'block' : 'hidden')
    setIsOpen(!isOpen)
  }
  return (
    <nav className="relative flex justify-between md:justify-around items-center px-3 md:px-16 py-4">
         <div className='flex items-center'>
         <IoMenu onClick={handleToggle} className={`${attr2} md:hidden text-3xl mr-3`}/>
         <RxCross2 onClick={handleToggle} className={`${attr} md:hidden text-3xl mr-3`}/>

        <Link href="/"><Image src={logo} alt='logo' className='w-24 sm:w-32'/></Link>
        </div> 
        <div>
        <ul className={`${attr} w-[100vw] left-0 top-14 absolute bg-white z-20  text-center space-x-6 space-y-3 text-xl  py-4 font-medium md:hidden`}>
        <li className=''>
          <Link href="/casual" className="hover:text-gray-500 flex items-center gap-1 mx-auto justify-center ml-7">
            <span>Shop</span> <IoIosArrowDown/>
          </Link>
        </li>
        <li>
          <Link href="#best" className="hover:text-gray-500">
            On Sale
          </Link>
        </li>
        <li>
          <Link href="#new" className="hover:text-gray-500">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link href="#brands" className="hover:text-gray-500">
            Brands
          </Link>
        </li>
      </ul>
        </div>
      <ul className="hidden space-x-6 text-sm font-medium lg:flex">
        <li>
          <Link href="/casual" className="hover:text-gray-500 flex items-center gap-1">
            Shop <IoIosArrowDown/>
          </Link>
        </li>
        <li>
          <Link href="#best" className="hover:text-gray-500">
            On Sale
          </Link>
        </li>
        <li>
          <Link href="#new" className="hover:text-gray-500">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link href="#brands" className="hover:text-gray-500">
            Brands
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <SearchBar/>

        <Link href="/cart" className="hover:text-gray-500">
          <CartPageIcon/>
        </Link>

        <Link href="#" className="hover:text-gray-500">
          <FiUser size={20} />
        </Link>
      </div>
    </nav>
  )
}

export default Header