import React from 'react'
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-black w-screen w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white gap-4'>
      <div>AKASH SHRESHTHA
      <div>
        I Know i am epic but need gopal to be get advance
      </div>
      <div className='flex items-center gap-3'>
            <FaInstagram/>
            Instagram
        </div> <div className='flex items-center gap-3'>
            <FaFacebookF/>
            FaceBook
        </div> <div className='flex items-center gap-3'>
            <FaSquareXTwitter/>
            Twitter
        </div>
        </div>
      <div>TIMINGS

        <div>
        Mon - Sun : 12PM TO 10PM

        </div>
      </div>
     
     
      <div>
        <h1>Get In Touch</h1>
        <div className='flex items-center gap-3'>
            <ImLocation/>
            AGRA ROAD JAIPUR
        </div>
        <div className='flex items-center gap-3'>
            <FaPhoneAlt/>
            9602243228
        </div>
        <div className='flex items-center gap-3'>
            <BiLogoGmail/>
            IamGandu@gmail.com
        </div>
          
      </div>
    </div>
  )
}

export default Footer
