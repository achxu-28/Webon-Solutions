import Image from "next/image";
import React from "react";

import bg from "../../public/image/aiBg.png";
import smile from "../../public/image/talentedPeeps.png";
import * as motion from "motion/react-client"

const HomePageHero = () => {
  return (
    <div className=" bg-white -mt-16">
      <div className="relative h-[100vh] md:h-[110vh] w-full  bg-red-200">
        <div className="absolute flex w-full h-10  bottom-0 bg-gradient-to-b from-white/0 to-orange-50 z-20"></div>
        <div className=" ">
          <Image
            src={bg}
            alt="Hero Image"
            className="object-cover z-1 h-[100vh] md:h-[110vh] w-full"
          />
        </div>

        <div className="absolute inset-0 px-4 md:px-8 w-full h-full  flex items-end">
          <section
           className=" pb-25 pt-20 md:pt-25 md:pb-40 rounded-t-[30px] relative border-1 border-b-0 border-gray-400 backdrop-blur-[4px] bg-white/40 shadow-[0px_-5px_11px_-9px] ">
          {/* <div className="absolute w-full h-full inset-0 rounded-t-[30px] "
          style={{ boxShadow: "inset -2px -2px 5px rgba(0, 0, 0, 0.4)" }}></div> */}
            <div className="  mx-auto px-4 sm:px-6 lg:px-8 flex gap-12 items-center">
              <div className="text-left flex flex-col items-center ">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-[45px] md:text-[70px] font-poppins-medium z-10 lg:pb-10 text-orange-800 font-extrabold leading-15 md:leading-20"
                >
                  Design. Identity. Brands.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  className="mt-14 md:mt-6 text-[18px] px-4 lg:px-30 text-black leading-relaxed"
                >
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold">
                    Hashflow
                  </span>{" "}
                  is a full-service digital agency in India. We build stunning
                  websites, does digital Marketing, creates video editings and
                  create apps that users love.
                </motion.div>

                <div className="flex gap-4 md:gap-8">
                  {/* button 1 */}
                  <div className="mt-8">
                    <a
                      href="#services"
                      className="inline-block bg-gradient-to-br  text-white font-semibold py-3 px-6 
                    rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-orange-700 from-orange-500 to-yellow-500  transition-all duration-300"
                    >
                      See our work
                    </a>
                  </div>
                  {/* button 2 */}
                  <div className="mt-8">
                    <a
                      href="#services"
                      className="inline-block bg-white  text-orange-500 font-semibold py-3 px-6
                    rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-orange-700 border-orange-400 border-1   transition-all duration-300"
                    >
                      contact us
                    </a>
                  </div>
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
      <section className=" py-20 z-2 bg-orange-50 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder Shape */}
          <div className="hidden md:flex justify-center items-center h-full order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="rounded-[20px] w-80 relative overflow-hidden"
            >
              <div className="absolute w-full  inset-0 h-full rounded-[20px] backdrop-blur-[1px]"
               style={{ boxShadow: "inset -2px -2px 5px rgba(0, 0, 0, 0.4)" }}></div>
               <div className="absolute w-full  top-40 h-220 rotate-45 blur-[4px]  bg-white/20"></div>
              <Image
                src={smile}
                alt="Hero Image"
                className="w-full h-full rounded-[20px] "
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-left  order-1 md:order-2 "
          >
            <h2 className="text-[35px] font-bold md:text-[40px] text-gray-800 leading-tight">
              Powered by
              <br />
              <span className="relative inline-block text-gray-800 ">
                talented people
              </span>
            </h2>
            <p className="mt-6 text-base text-[16px] md:text-[18px] text-orange-700 max-w-lg leading-relaxed">
              At Hashflow, we believe in building relationships, not just
              projects. Our integrated approach ensures that every piece of your
              digital presence works together to achieve one thing: your
              success. We are a team of passionate creators, strategists, and
              developers committed to bringing your vision to life.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-br text-gray-700 font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-orange-400 from-orange-300 to-yellow-300  transition-all duration-300"
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
