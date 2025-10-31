import React from 'react'

import Image from 'next/image';
import gradient from "../../public/image/orange_gradient.png";



const WeCraftExp = () => {
  return (
    <section
          id="about"
          className="relative bg-gradient-to-br to-[#f2ff0067] from-orange-300/40  pt-25 pb-55 md:pt-45 md:pb-85 "
        >
            <div className='absolute inset-0 h-full z-0'>
                <Image src={gradient} alt='' className='opacity-40 h-full w-full'/>
            </div>

          <div className="relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl text-orange-600 md:text-4xl font-bold leading-tight">
                We craft experiences for business to help reach our customers
              </h2>
              <p className="mt-6 max-w-lg  text-orange-950 md:text-[22px]">
                We don&apos;t just build a website and walk away. Our process
                ensures that SEO, content, design, and user experience work in
                harmony from day one. A beautifully designed website is useless
                if no one can find it.
              </p>
              <div className="mt-8 flex items-center space-x-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-br text-gray-700 font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-orange-400 from-orange-300 to-yellow-300  transition-all duration-300"
              >
                Learn more
              </a>
            </div>
            </div>
            {/* Placeholder Shape */}
            {/* <div className="hidden md:flex justify-center items-center h-full">
              <div className=" h-full ">
                <Image
                  src={teamVector}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div> */}
          </div>
          <div className="w-full z-2 absolute -bottom-1 bg-gradient-to-b to-yellow-50  h-10"></div>
        </section>
  )
}

export default WeCraftExp
