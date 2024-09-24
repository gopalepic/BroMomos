import React from 'react'
import Header from '../components/Header'
import Founder from '../components/Founder'
import Footer from './Footer'
const AboutUs = () => {
  return (
    <div>
        <Header/>
        <div className='w-screen h-[20vw]  flex items-center justify-center '>
       <h1 className='text-3xl font-bold'>Explore the <span  className='text-[#ecb912]'>Unexplored</span></h1> 
       
      </div>
       <Founder/>
       <Footer/>
     
    </div>
  )
}

export default AboutUs
