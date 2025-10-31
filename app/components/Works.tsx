// src/components/Works.js (or your file path)
"use client"; // Add this if you are using Next.js App Router

import Image from 'next/image';
import React from 'react';

// Import your images
import work1 from '../../public/image/fredoFront.jpg';
// Add other project images here if you have them
// import work2 from '../../public/image/project2.jpg';
// import work3 from '../../public/image/project3.jpg';
// import work4 from '../../public/image/project4.jpg';

// Define your project data in an array for easy mapping
const projects = [
  {
    image: work1,
    title: "Fredo",
    description: "E-Commerce Website",
  },
  {
    image: work1, // Replace with different images
    title: "Project Two",
    description: "Mobile Application",
  },
  {
    image: work1, // Replace with different images
    title: "Project Three",
    description: "Branding & Identity",
  },
  {
    image: work1, // Replace with different images
    title: "Project Four",
    description: "Web Platform",
  },
    {
    image: work1, // Replace with different images
    title: "Project Five",
    description: "Design System",
  },
];

const Works = () => {
  return (
    <div className='bg-white '>
      <h1 className='text-center text-orange-800 font-raleway  lg:px-8 py-3 leading-tight text-[34px] md:text-[45px] px-4 font-extrabold'>
        Showcasing Some of <br />Our Recent Projects
      </h1>
      <div className='bg-white p-4 md:p-8 lg:p-16  flex flex-col gap-4 '>
        {/* #1 */}
        <div className='flex flex-col md:flex-row gap-1 bg-gradient-to-tr  from-orange-400/90 backdrop-blur-[10px] to-orange-300/60 shadow-[0px_0px_5px_0px] shadow-gray-400 h-120 lg:h-150 sticky top-20  rounded-[15px] p-1 '>
          <Image src={work1} alt='' className='rounded-[15px] object-cover '/>
          <div className='h-full text-center flex flex-col justify-center items-center md:w-[40%]  bg-white/30 rounded-[15px] '>
            <div className='text-left px-2'>
              <p className='text-[22px] '>Fredo</p>
              <p className='text-[18px] '>E-commerce Website</p>
            </div>
          </div>
        </div>
        {/* #2 */}
        <div className='flex flex-col md:flex-row gap-1 bg-gradient-to-tr  from-orange-400/90 backdrop-blur-[10px] to-orange-300/60 shadow-[0px_0px_5px_0px] shadow-gray-400 h-120 lg:h-150 sticky top-21 md:top-22  rounded-[15px] p-1 '>
          <Image src={work1} alt='' className='rounded-[15px] object-cover '/>
          <div className='h-full text-center flex flex-col justify-center items-center md:w-[40%]  bg-white/30 rounded-[15px] '>
            <div className='text-left px-2'>
              <p className='text-[22px] '>Fredo</p>
              <p className='text-[18px] '>E-commerce Website</p>
            </div>
          </div>
        </div>
        {/* #3 */}
        <div className='flex flex-col md:flex-row gap-1 bg-gradient-to-tr  from-orange-400/90 backdrop-blur-[10px] to-orange-300/60 shadow-[0px_0px_5px_0px] shadow-gray-400 h-120 lg:h-150 sticky top-22 md:top-24  rounded-[15px] p-1 '>
          <Image src={work1} alt='' className='rounded-[15px] object-cover '/>
          <div className='h-full text-center flex flex-col justify-center items-center md:w-[40%]  bg-white/30 rounded-[15px] '>
            <div className='text-left px-2'>
              <p className='text-[22px] '>Fredo</p>
              <p className='text-[18px] '>E-commerce Website</p>
            </div>
          </div>
        </div>
        {/* #4 */}
        <div className=' flex flex-col md:flex-row gap-1 bg-gradient-to-tr  from-orange-400/90 backdrop-blur-[10px] to-orange-300/60 shadow-[0px_0px_5px_0px] shadow-gray-400 h-120 lg:h-150 sticky top-23 md:top-25  rounded-[15px] p-1 '>
          <Image src={work1} alt='' className='rounded-[15px] object-cover '/>
          <div className='h-full text-center flex flex-col justify-center items-center md:w-[40%]  bg-white/30 rounded-[15px] '>
            <div className='text-left px-2'>
              <p className='text-[22px] '>Fredo</p>
              <p className='text-[18px] '>E-commerce Website</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Works;

{/* <div className=' relative  pt-25 pb-60 flex flex-col gap-14'>
      {/* <div className='absolute bottom-0  right-10 w-250 '>
        <Image src={wave} alt='A showcase of our work' 
        className='object-cover  '/>
      </div> */}


      // <h1 className='text-center text-black font-raleway  lg:px-8 py-3 leading-tight text-[34px] md:text-[45px] px-4 font-extrabold'>
      //   Showcasing Some of <br />Our Recent Projects
      // </h1>

      {/* Main container for the scroller */}
      {/* - `overflow-hidden`: Hides the content that goes outside the container.
        - `[mask-image:...]`: Creates a faded effect on the left and right edges.
      */}

      // <div className="w-full overflow-hidden" >
         {/* add for side gradient---> style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }} */}

        {/* - The inner div that holds the content and animates.
          - `flex` and `w-max` lay out all children in a single, non-wrapping row.
          - `animate-scroll` applies our custom animation defined in tailwind.config.js
        */}

        // <div className="flex  w-max animate-scroll">
          
          {/* We map over the projects array twice ([...projects, ...projects]).
            This duplication is the key to the infinite scroll illusion.
            The animation moves the container by the width of the *original* set of projects,
            and because the second set is identical, it looks like it's looping.
          */}

    //       {[...projects, ...projects].map((project, index) => (
    //         <div 
    //           key={index} // It's okay to use index here since the list is static
    //           className='flex-shrink-0 w-80 p-2 mx-4 rounded-lg border border-gray-300/20  bg-white/40 backdrop-blur-[10px] '
    //           style={{ boxShadow: "inset 0px 0px 10px rgba(255, 255, 255, 0.1)" }}
    //         >
    //           <Image 
    //             src={project.image} 
    //             alt={`${project.title} screenshot`}
    //             className='rounded-md w-full'
    //           />
    //           <h2 className='mt-2 text-xl font-semibold text-gray-800'>
    //             {project.title}{" "}
    //             <span className='text-gray-400 font-normal'>— {project.description}</span>
    //           </h2>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div> */}