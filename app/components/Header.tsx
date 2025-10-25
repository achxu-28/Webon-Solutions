import React from 'react';

const Header = () => {
  return (
    <header className=" font-poppins   sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  Hashflow
                </a>
              </div>
              <nav className="hidden md:flex md:space-x-8">
                <a href="#services" className="text-black hover:text-orange-600 font-medium">Services</a>
                <a href="#about" className="text-black hover:text-orange-600 font-medium">About Us</a>
                <a href="#contact" className="text-black hover:text-orange-600 font-medium">Contact</a>
              </nav>
              <div className="hidden md:block">
                 <a href="#contact"  className="inline-block font-semibold py-2 px-4 rounded-lg  bg-orange-400  text-white  hover:shadow-[3px_4px_0px_0px] shadow-orange-400   hover:bg-orange-300  transition-all duration-200">
                  Get a Free Quote
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