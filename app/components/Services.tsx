"use client";
import React, { useState } from "react";
import WaveUp from "../smallThings/WaveUp";
import * as motion from "motion/react-client";

import img1 from "../../public/image/Horizontal Team Illustration.png";
import Image from "next/image";
import Wave2 from "../smallThings/Wave2";

const Services = () => {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [menu7, setMenu7] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className=" relative bg-orange-50">
        <div className="absolute top-5 md:top-10 inset-0 ">
          <Wave2 />
        </div>
        <div className="">
          <WaveUp />
        </div>
      </div>
      <section
        id="services"
        className=" bg-orange-100 flex pt-25 pb-20 md:pt-15 md:pb-40"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[35px] text-center  md:text-[55px]   font-bold mb-4 md:mb-8">
            Our Services
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="flex flex-col  md:flex-row gap-x-0  gap-y-4 cursor-pointer "
          >
            {/* Column 1 */}
            <div className="flex-col flex gap-3   text-[18px]  md:text-[20px] text-orange-800">
              {/* service 1 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu(!menu)}>
                <ul className="flex justify-between  ">
                  Web Development{" "}
                  <span >{menu ? "-" : "+"}</span>
                </ul>
                {menu && (
                  <p className="border-t-1 pt-4 ">
                    Custom web solutions using modern frameworks to build
                    scalable and responsive websites.
                  </p>
                )}
              </div>
              {/* service 2 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu2(!menu2)}>
                <ul className="flex justify-between  ">
                  Mobile App Development{" "}
                  <span >{menu2 ? "-" : "+"}</span>
                </ul>

                {menu2 && (
                  <p className="border-t-1 pt-4 ">
                    Building native and cross-platform mobile apps for Android
                    and iOS using texhnologies like React Native and Flutter.
                  </p>
                )}
              </div>
              {/* service 3 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu3(!menu3)}>
                <ul className="flex justify-between  ">
                  Internships <span >{menu3 ? "-" : "+"}</span>
                </ul>
                {menu3 && (
                  <p className="border-t-1 pt-4 ">
                  Practical training and industry exposure for students and
                  freshers to gain hands-on experience in web development and
                  mobile app devolopment.
                </p>
                )}
                
              </div>
              {/* service 4 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu4(!menu4)}>
                <ul className="flex justify-between  ">
                  Academic Projects <span >{menu4 ? "-" : "+"}</span>
                </ul>
                {menu4 && (
                <p className="border-t-1 pt-4 ">
                  Custom project development for students, helping them with
                  coding, implementaion, and guidance to achieve academic
                  success.
                </p>  
                )}
                
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-col flex gap-3  md:pl-8 text-[18px] md:text-[20px]  text-orange-800">
              {/* service 5 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu5(!menu5)}>
                <ul className="flex justify-between  ">
                  Digital Marketing <span >{menu5 ? "-" : "+"}</span>
                </ul>
                {menu5 && (
                <p className="border-t-1 pt-4 ">
                  Comprehensive digital marketiing services including SEO,
                  social media marketing, content creation and PPC advertising
                  to boost online presence.
                </p>  
                )}
                
              </div>
              {/* service 6 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu6(!menu6)}>
                <ul className="flex justify-between  ">
                  Wordpress <span >{menu6 ? "-" : "+"}</span>
                </ul>
                {menu6  && (
                <p className="border-t-1 pt-4 ">
                  Custom Wordpress theme development, plugin customization, and
                  user-friendly websites for buissness and induviduals.
                </p>  
                )}
                
              </div>
              {/* service 7 */}
              <div className="flex flex-col border-1 px-4 py-3  bg-white/70 rounded-[10px] " onClick={() => setMenu7(!menu7)}>
                <ul className="flex justify-between  ">
                  Academic Projects <span >{menu7 ? "-" : "+"}</span>
                </ul>
                {menu7 && (
                 <p className="border-t-1 pt-4 ">
                  Proffesional video editing services for corporate videos,
                  promotional content, and social media.
                </p> 
                )}
                
              </div>
            </div>
          </motion.div>
        </div>

        <div className="   items-end pr-8 hidden lg:block h-fit  w-[120vh]">
          <Image src={img1} alt="" className="object-cover w-full h-[250px]" />
        </div>
      </section>
      {/* <WaveDown /> */}
    </motion.div>
  );
};

export default Services;
