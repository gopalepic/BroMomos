import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Bromomos from "../assets/LOGO.jpg"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
    const hover = `hover:bg-[#ed1b22] hover:text-black hover:p-1 rounded-md `
    const [showitems , setShowItems] = useState(false);
    
    const Items = () => {
      setShowItems(!showitems)
    }
  return (
   
    <div className='flex items-center justify-between p-1 bg-[#0d0d0d] px-[3vw]'>
        <div className='w-[10vw] cursor-pointer '> <img src={Bromomos} className='rounded-full' onClick={()=> navigate("/")} alt="logo"  />  </div>
         <div className='mr-[9%] '> 
           <div className='hidden lg:block'>
            <ul className='flex gap-12 font-semibold text-white'>
                 <button className={hover} onClick={() => navigate('/')}>Home</button>
                 <button className={hover} onClick={() => navigate('/about')}>About us</button>
                 <button className={hover} onClick={() => { navigate("/menu") }}>Menu</button>
                 <button className={hover}>Gallery</button>
                 <button className="text-[#ed1b22] ">Order Now</button>
             </ul>
              </div>
              <div className='block lg:hidden'>
                <IoMenu onClick={Items} className='text-3xl  bg-red-700 rounded-sm'/>
                { showitems && 
                <div>
                <ul className='bg-[#0d0d0d] text-gray-300 flex flex-col gap-3 font-semibold absolute z-10 top-18 right-0 w-1/2'>
                 <button className={hover} onClick={() => navigate('/')}>Home</button>    
                 <button className={hover} onClick={() => navigate('/about')}>About us</button>
                 <button className={hover} onClick={() => { navigate("/menu") }}>Menu</button>
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
