import Image from 'next/image'
import React from 'react'

import work1 from '../../public/image/fredoFront.jpg'
import wave2 from '../../public/image/wave2.png'



const Works = () => {
  return (
    <div className='  py-20 flex flex-col gap-2 justify-start items-start md:py-32'>
        
      <h1 className='sticky z-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text top-15 backdrop-blur-[10px] py-4 text-3xl md:text-4xl px-4 sm:px-6 lg:px-8 font-bold leading-tight lg:w-fit'>
        Showcasing Some of Our <br />Recent Projects 
      </h1>
      <div className=' sticky w-full -left-4 top-[40%] lg:-top-40 z-1'>
            <Image src={wave2} alt='' className='w-full blur-[6px] ' />
        </div>

      <section className='flex flex-col md:flex-row flex-wrap z-2   w-full lg:w-fit gap-2 lg:gap-8 px-4 sm:pr-6 lg:pl-0
       lg:space-y-5 lg:pr-8 lg:ml-[20%] items-center lg:justify-end justify-center'>
        {/* IMAGE1  */}
          <div style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.2)" }} className=' w-80 bg-white/10 backdrop-blur-[10px] border-gray-300 h-100 md:w-100 md:h-120 p-2 rounded-[10px] border-1'>
            <Image src={work1} alt=''/>
            <h1 className='mt-2 text-2xl'>Fredo <span className='text-gray-700'>— E-Commerce Website</span></h1>
          </div>
        {/* IMAGE2  */}
          <div style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.2)" }} className=' w-80 bg-white/10 backdrop-blur-[10px] border-gray-300 h-100 md:w-100 md:h-120 lg:mt-20 p-2 rounded-[10px] border-1'>
            <Image src={work1} alt=''/>
            <h1 className='mt-2 text-2xl'>Fredo <span className='text-gray-700'>— E-Commerce Website</span></h1>
          </div>
        {/* IMAGE3  */}
          <div style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.2)" }} className=' w-80 bg-white/10 backdrop-blur-[10px] border-gray-300 h-100 md:w-100 md:h-120 p-2 rounded-[10px] border-1'>
            <Image src={work1} alt=''/>
            <h1 className='mt-2 text-2xl'>Fredo <span className='text-gray-700'>— E-Commerce Website</span></h1>
          </div>
        {/* IMAGE4  */}
          <div style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.2)" }} className=' w-80 bg-white/10 backdrop-blur-[10px] border-gray-300 h-100 md:w-100 md:h-120 lg:mt-20 p-2 rounded-[10px] border-1'>
            <Image src={work1} alt=''/>
            <h1 className='mt-2 text-2xl'>Fredo <span className='text-gray-700'>— E-Commerce Website</span></h1>
          </div>
      </section>
    </div>
  )
}

export default Works
