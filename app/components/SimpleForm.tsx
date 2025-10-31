import Image from "next/image";
import arrow from "../../public/image/Group 134.png";
import whatsapp from "../../public/image/whatsapp_doodle.png";
import map from "../../public/image/map_drawing.png";
import React from "react";

const SimpleForm = () => {
  return (
    <div className="container flex  flex-col gap-8 mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center bg-white">
      <div className="text-center flex flex-col justify-center items-center">
        <div className="relative text-[20px] md:text-4xl border-1 w-fit bg-orange-400 text-white border-gray-400 px-4 py-1 rounded-full font-bold">
          <h2>Ready to Start a Project?</h2>
          <div className="-bottom-8 right-0 absolute z-10">
            <Image src={arrow} alt="" className="w-12 object-cover" />
          </div>
        </div>
        <p className="mt-4 text-[18px] text-orange-800">
          Let&apos;s talk about your goals. We offer a free, no-obligation
          consultation to discuss your project.
        </p>
      </div>

      <div className="flex  flex-col gap-8 relative">
        {/* contact Us */}
        <div className=" lg:absolute z-1">
          <div className="mt-8 text-left text-orange-950 ">
            <h2 className="text-[35px] md:text-[40px] lg:text-[50px] ">
              Contact Us
            </h2>
            <p className="pr-10 text-[18px] ">
              Get in touch with us at Hashflow. We&apos;re here to help
            </p>
          </div>
        </div>

        {/* background image  */}

        <div className="left-0 bottom-10 absolute z-0">
          <Image
            src={map}
            alt=""
            className="w-full h-[50vh]  object-contain mix-blend-color-burn"
          />
        </div>

        <div className="flex z-2 flex-col pt-0 lg:pt-10 lg:flex-row lg:items-end items-center lg:justify-end  gap-8 ">
          {/* card 1 */}
          <div className="bg-gradient-to-br max-w-100 lg:mb-4 from-green-50 to-orange-200 flex flex-col justify-center gap-2 rounded-[20px] border-1 border-gray-400 px-8 py-2 text-black h-80 md:h-90 lg:h-100 ">
            <h2 className="text-left text-[30px] leading-tight text-orange-700 ">
              Get 24/7 <br /> support
            </h2>
            <label className="text-left pb-4">
              Our agents are here for your questions and doubts. Feel free to
              contact our agent at any time.{" "}
            </label>
            <button className="bg-amber-500 border-1 border-gray-400 rounded-[15px] px-2 py-2 w-full ">
              {'call us'}
            </button>
            <button className="bg-amber-500 border-1 border-gray-400 rounded-[15px] px-2 py-2 w-full ">
              email us
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {/* card 2 */}
            <div className="bg-white/20 backdrop-blur-[10px] flex flex-col justify-center max-w-100 rounded-[20px] border-1 border-gray-400 text-black h-100 md:h-110 ">
              <h3 className="text-[30px] pb-5">Leave a message</h3>
              <form
                action=""
                className="text-[12px] md:text-[14px] lg:text-[16px] flex flex-col gap-4 px-8 justify-start"
              >
                <input
                  type="text"
                  required
                  placeholder="name (required)"
                  className="border-1 py-2 px-2 border-gray-400 rounded-[15px] focus:ring-0 focus:outline-none "
                />
                <input
                  type="email"
                  required
                  placeholder=" email (required)"
                  className="border-1 py-2 px-2 border-gray-400 rounded-[15px] focus:ring-0 focus:outline-none "
                />
                <input
                  type="number"
                  placeholder=" phone number"
                  className="border-1 py-2 px-2 border-gray-400 rounded-[15px] focus:ring-0 focus:outline-none "
                />
                <textarea
                  rows={4}
                  required
                  placeholder="how can we help you? (required)"
                  className="border-1 py-2 px-2 border-gray-400 rounded-[15px] focus:ring-0 focus:outline-none "
                />

                <div className="text-right">
                  <button
                    className="bg-orange-400/90 backdrop-blur-[10px]
                                    border-1 border-gray-400 rounded-[15px] text-[16px] w-fit px-3 mt-1 py-1"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>

            {/* card 3 */}
            <div className="bg-gradient-to-br relative overflow-hidden from-green-100 to-orange-600 max-w-100 rounded-t-[20px] border-1 border-gray-400 border-b-0 h-40  text-left text-black">
              <Image
                src={whatsapp}
                alt=""
                className="object-cover rounded-t-[20px] opacity-50 w-full "
              />
              <div className="w-full h-full px-8 absolute top-0 z-20 backdrop-blur-[0px] flex items-center">
                <h2 className="text-[30px] text-orange-950 ">
                  Click Here to Join Our WhatsApp Community.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
