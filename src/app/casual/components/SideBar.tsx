import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { IoIosArrowForward } from "react-icons/io";
import Range from './Range'
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const colors = ['#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000' ]
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium','Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']
const filter = ['T-shirt', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const dresses = ['Casual', 'Formal', 'Party', 'Gym', 'Jeans']

const SideBar = ({open, toggleBtn}: {open?:string, toggleBtn?:()=>void}) => {
  
  return (
    <div className={`${open} bg-white w-[100vw]  lg:w-[300px] border-[1px] rounded-3xl  overflow-y-scroll px-3 h-[80vh] lg:h-[1130px] mt-5 relative`}>
        <div className='flex items-center justify-between py-3 border-b-2  '>
            <h3 className='font-semibold'>Filter</h3>
            <VscSettings className='text-xl  hidden lg:block' />
            <RxCross2 onClick={toggleBtn} className='text-xl fixed right-5 bg-white lg:hidden' />
        </div>
        <ul className='py-3 border-b-2 space-y-2'>
          {filter.map((item, index) =>(

            <li key={index} className='text-gray-400 flex justify-between items-center'><span>{item}</span> <IoIosArrowForward/></li>
          ))}
        </ul>
        <div className='py-5 space-y-5 border-b-2 '>
          <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Price</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
        <Range/>
        </div>
        <div className='py-3 space-y-4 border-b-2 '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Color</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
          <div className='flex flex-wrap gap-2 px-5 justify-center'>
            {colors.map((color, index)=>(
              <div key={index} className={`p-2 w-[35px] h-[35px] rounded-full border-[1px]`} style={{backgroundColor: color}}></div>
            ))}
          </div>
        </div>
        <div className='py-3 space-y-4 border-b-2 '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Color</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
          <div className='flex flex-wrap gap-2 px-5 '>
            {sizes.map((size, index)=>(
              <button key={index} className={`p-2 px-4 rounded-full border-[1px] ${size === 'Large' ? 'bg-black text-white' :'bg-gray-200' }`}>{size}</button>
            ))}
          </div>
        </div>
        <div className='py-3 space-y-4 flex flex-col '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Dress Style</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
        <ul className='py-3 space-y-2'>
          {dresses.map((item, index) =>(
            <li key={index} className='text-gray-400 flex justify-between items-center'><span>{item}</span> <IoIosArrowForward/></li>
          ))}
        </ul>
        <button className='px-4 py-3 rounded-full bg-black text-white'>Apply Filter</button>
        </div>
    </div>

  )
}

export default SideBar