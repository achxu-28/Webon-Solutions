import React from "react";
import WaveUp from "../smallThings/WaveUp";
import WaveDown from "../smallThings/WaveDown";
import * as motion from "motion/react-client";

// New component for the numbered service item
const NumberedServiceItem = ({
  number,
  title,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex  items-center mb-6">
    <div className="flex-shrink-0 text-[34px] font-extrabold  text-gray-50 mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-[18px] font-bold text-gray-300  ">{title}</h3>
    </div>
  </div>
);
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <WaveUp />
      <section
        id="services"
        className="bg-gradient-to-bl from-[#a855f7] to-[#6366f1] py-10 md:py-5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl bg-gradient-to-r from-gray-50 to-gray-200 text-transparent bg-clip-text  md:text-4xl font-bold mb-12">
            Our Services
          </h2>
          <motion.div
          initial={{opacity:0, x: -150}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, ease: "easeIn"}}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {/* Column 1 */}
            <div>
              <NumberedServiceItem number="01" title="Web Design & Development">
                Creating responsive, high-performance websites with a focus on
                user experience and conversion.
              </NumberedServiceItem>
              <NumberedServiceItem number="02" title="Digital Marketing">
                Data-driven SEO, PPC, and Social Media strategies to boost your
                visibility and generate qualified leads.
              </NumberedServiceItem>
              <NumberedServiceItem number="03" title="Mobile App Development">
                Building intuitive and powerful native & cross-platform mobile
                applications for iOS and Android.
              </NumberedServiceItem>
            </div>
            {/* Column 2 */}
            <div
            
            >
              <NumberedServiceItem number="04" title="Wordpress">
                From a memorable logo to a complete brand identity, we design
                visuals that tell your story.
              </NumberedServiceItem>
              <NumberedServiceItem number="05" title="Graphic Designing">
                Custom software solutions designed to streamline your operations
                and drive business efficiency.
              </NumberedServiceItem>
              <NumberedServiceItem number="06" title="Video Editing">
                Dominating search engine rankings with our proven strategies for
                organic growth.
              </NumberedServiceItem>
            </div>
          </motion.div>
        </div>
      </section>
      <WaveDown />
    </motion.div>
  );
};

export default Services;
