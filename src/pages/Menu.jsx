import React from 'react'
import Menu1 from '../assets/Menu-1.png'
import Menu2 from '../assets/Menu-2.png'
import Header from '../components/Header'
const Menu = () => {
  return (
    <div>
      <Header/>
      <div className='w-screen h-[20vw]  flex items-center justify-center '>
       <h1 className='text-3xl font-bold'>Explore the <span  className='text-[#ecb912]'>Unexplored</span></h1> 
      </div>
      <img src={Menu1} className='w-screen' alt="Menuu" />
      <img src={Menu2} className='w-screen' alt="" />
    </div>
  )
}

export default Menu
