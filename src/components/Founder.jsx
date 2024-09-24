import React from 'react'
import image from '../assets/LOGO.jpg'

const Founder = () => {
  return (
    <div className=' mx-[10vw] '>
      

     <h1 className='text-center text-3xl'> JISKA PET NAHI, <form> VO SETH NAHI</form> </h1>
      <div className=' m-[2vw] flex-col justify-center mx-[10vw] md:flex md:flex-row gap-4'>
        <div className='flex justify-center'>
          <img src={image} className='rounded-full w-full' />
        </div>
        <div className=' flex items-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse ratione dolorum corrupti illo animi repellendus commodi iure quis, nihil recusandae voluptates, architecto ipsa. Maxime voluptate omnis reprehenderit ab vel.
          ectetur adipisicing elit. Maiores accusamus, aspernatur odit voluptatum facilis libero dolore iusto nemo blanditiis unde qui repellat facere. Similique dolore excepturi ea quas! Ab, quo!
        </div>
        </div>
     
    </div>
  )
}

export default Founder
