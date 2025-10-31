import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import gradient from "../../public/image/orange_gradient.png";
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="relative  text-white">
      <div className='absolute w-full z-0'>
        <Image src={gradient} alt='' className='object-cover w-full h-140 md:h-76 z-0'/>
      </div>

      <div className='absolute w-full'>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-orange-950 ">
            <div>
              <h3 className="text-2xl font-bold mb-2">Hashflow</h3>
              <p className="text-white">Your Digital Growth Partner.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-black"><FaTwitter size={20} /></a>
                <a href="#" className="text-white hover:text-black"><FaLinkedin size={20} /></a>
                <a href="#" className="text-white hover:text-black"><FaInstagram size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white hover:text-black">Services</a></li>
                <li><a href="#about" className="text-white hover:text-black">About Us</a></li>
                <li><a href="#" className="text-white hover:text-black">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-white">
                <li>Email: contact@mentogram.in</li>
                <li>Phone: +91 12345 67890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-orange-950">
            <p>&copy; {new Date().getFullYear()} Hashflow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;