'use client'; // This is required for hooks like useState and useEffect

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrollY is greater than 10, else false
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <header 
      className={`
        font-poppins sticky top-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text"
            >
              Hashflow
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a 
              href="#services" 
              className={`
                font-medium transition-colors duration-300
                ${isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-300'}
              `}
            >
              Services
            </a>
            <a 
              href="#about" 
              className={`
                font-medium transition-colors duration-300
                ${isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-300'}
              `}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className={`
                font-medium transition-colors duration-300
                ${isScrolled ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-300'}
              `}
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
             {/* This button already looks good on both light and dark, so no changes needed */}
            <a 
              href="#contact" 
              className="inline-block font-semibold py-2 px-4 rounded-lg bg-orange-400 text-white hover:shadow-[3px_4px_0px_0px] shadow-orange-400 hover:bg-orange-300 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;