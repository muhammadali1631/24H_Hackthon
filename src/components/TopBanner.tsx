import Link from 'next/link'
import React from 'react'
import { RxCross2 } from "react-icons/rx";


const TopBanner = () => {
  return (
    <div className="relative w-full bg-black text-white justify-center flex items-center sm:px-6 py-2">
      <p className="text-xs sm:text-sm flex sm:justify-center gap-1 sm:gap-2">
        Sign up and get <span className="font-bold">20% off</span> to your first order.
        <Link href="#" className="underline font-medium hover:text-gray-300">
          Sign Up Now
        </Link>
      </p>
      <RxCross2
        className="text-white text-xl hover:text-gray-300 absolute right-10 hidden sm:block"
      />
    </div>
  )
}

export default TopBanner