"use client"
import Image from "next/image";
import React from "react";
import l20 from "../../../public/image/4-46.png";
import smile from "../../../public/image/smile.png";
import { motion, useScroll, useTransform } from "motion/react";

const HomePageHero = () => {

    const { scrollY } = useScroll();
      const y1 = useTransform(scrollY, [0, 400], [0, 100]);



  return (
    <div>
      <div className="relative h-[100vh]">
        <motion.div
        style={{y: y1}}
        className="absolute top-10 md:right-8 -right-10">
          {" "}
          <Image
            src={l20}
            alt="Hero Image"
            className="object-cover z-1 w-90  md:w-fit blur-[4px]"
          />
        </motion.div>
        <div className="absolute inset-0 w-full h-full">
          <section className=" py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left  ">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-4xl  font-poppins-medium z-10 md:text-6xl bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text font-extrabold leading-tight"
                >
                  Design.
                  <br />
                  Identity.
                  <br />
                  Brands.
                  <br />
                </motion.div>
                <motion.div
                initial={{opacity:0, x: -150}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, ease: "easeIn"}}
                className="text-4xl bg-gradient-to-br from-gray-900 via-50% via-gray-300 to-60% to-gray-800 text-transparent bg-clip-text md:text-6xl font-extrabold leading-tight">
                  with Webon Solutions
                </motion.div>
                <motion.div
                initial={{opacity:0, x: -150}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, ease: "easeIn"}}
                className="mt-14 md:mt-6 text-lg text-gray-700">
                  Welcome to Webon Solutions, a full-service digital agency in India. We
                  build stunning websites, does digital Marketing, creates video editings
                  and create apps that users love.
                </motion.div>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-block bg-gradient-to-br  text-white font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-indigo-700 from-purple-500 to-indigo-500  transition-all duration-300"
                  >
                    See our work
                  </a>
                </div>
              </div>


              {/* Placeholder Shape */}
              {/* <div className="hidden md:flex justify-center items-center h-full">
                  <div className="w-64 h-64 bg-indigo-100 rounded-full opacity-80 shadow-md relative">
                    <Image src={heroImage} alt="Hero Image" fill className="w-full  absolute " />
                  </div>
                </div> */}
            </div>
          </section>
        </div>
      </div>
      {/* Powered by Talented People Section (Similar to Image 1 bottom part) */}
      <section className=" py-20 z-2  md:py-32">
        
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Placeholder Shape */}
            <div className="hidden md:flex justify-center items-center h-full order-2 md:order-1">
              <motion.div
              initial={{opacity:0, x: -150}}
                  whileInView={{opacity:1, x:0}}
                  transition={{duration:0.6, ease: "easeInOut"}}
              className="w-80 h-80">
                <Image
                  src={smile}
                  alt="Hero Image"
                  className="w-full h-full p-10  "
                />
              </motion.div>
            </div>
  
            
            <motion.div
            initial={{opacity:0, y: 100}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:0.6, ease: "easeInOut"}}
            className="text-left  order-1 md:order-2">
              <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text leading-tight">
                Powered by
                <br />
                <span className="relative inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  talented people
                </span>
              </h2>
              <p className="mt-6 text-base text-gray-700 max-w-lg">
                At Webon Solutions, we believe in building relationships, not just
                projects. Our integrated approach ensures that every piece of your
                digital presence works together to achieve one thing: your
                success. We are a team of passionate creators, strategists, and
                developers committed to bringing your vision to life.
              </p>
              <div className="mt-8 flex items-center space-x-6">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-br text-white font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-indigo-700 from-purple-500 to-indigo-500  transition-all duration-300"
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          </div>
      </section>
    </div>
  );
};

export default HomePageHero;
