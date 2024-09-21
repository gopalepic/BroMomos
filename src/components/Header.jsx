import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const hover = `hover:bg-[#ed1b22] hover:text-black hover:p-1 rounded-md `
    const [showitems , setShowItems] = useState(false);
    
    const Items = () => {
      setShowItems(!showitems)
    }
  return (
   
    <div className='flex items-center justify-between p-1 bg-[#0d0d0d] px-[3vw]'>
         <div className='w-[10vw] '> <img src="https://imgs.search.brave.com/CDeFBdzd27p6OQGb4MXLp_tF0zaAi6z6xWeMIsP56iM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg4LzEx/LzM2MF9GXzU4MTg4/MTE4MF9vWmN6RnZL/VmJFYUM4QXhMRGJ4/dU81ek0ycDJ6dGl3/Ny5qcGc" alt="logo"  />  </div>
         <div className='mr-[9%] '> 
           <div className='hidden lg:block'>
            <ul className='flex gap-12 font-semibold text-white'>
                 <button className={hover}>Home</button>
                 <button className={hover}>About us</button>
                 <button className={hover}>Menu</button>
                 <button className={hover}>Gallery</button>
                 <button className="text-[#ed1b22] ">Order Now</button>
             </ul>
              </div>
              <div className='block lg:hidden'>
                <IoMenu onClick={Items} className='text-3xl  bg-red-700 rounded-sm'/>
                { showitems && 
                <div>
                <ul className='bg-[#0d0d0d] text-gray-300 flex flex-col gap-3 font-semibold absolute z-10 top-18 right-0 w-1/2'>
                 <button className={hover} >Home</button>    
                 <button className={hover}>About us</button>
                 <button className={hover}>Menu</button>
                 <button className={hover}>Contact</button>
                 <button className="text-[#ed1b22] ">Order Now</button>
             </ul>
                </div>
                }
              </div>
             
         </div>
    </div>
  )
}

export default Header
