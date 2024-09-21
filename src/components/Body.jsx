import React from 'react'
import { useState } from 'react'
import image from '../assets/Main.jpg'
import image2 from '../assets/secc.jpg'
import image3 from '../assets/third.jpg'
import image4 from '../assets/forth.jpg'
import image5 from '../assets/fifth.mp4'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Body = () => {

    
    const slides = [
        {
          url: image,
        },
        {
          url: image2,
        },
        {
          url: image3,
        },
    
        {
          url: image4,
        },
        {
          url: image5,
        },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
     const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        
          setCurrentIndex(newIndex);
         
      };
  
    const goToSlide = (slideIndex) => {
       
        setCurrentIndex(slideIndex)

    };


  return  (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})`  }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500 opacity-55 '
    ></div>
    <div className='top-[50%]  absolute text-center left-[10%]'>
        <h1 className='text-4xl font-bold '>Provide Value</h1>
        <h2>To people , </h2>
    </div>
    
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Body