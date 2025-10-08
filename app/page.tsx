
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageHero from './components/HomePageHero';
import Services from './components/Services';
import Works from './components/Works';
import wave from '../public/image/18px Wavy.png'
import Image from 'next/image';




export default function HomePage() {
  return (
    <div className="font-poppins bg-white min-h-screen text-gray-900">
      <Header />
      
      <main>
        {/* Hero Section (Similar to Image 1 top part) */}
        <HomePageHero/>

        

        {/* Things We Enjoy / Our Services Section (Similar to Image 2) */}
        <Services/>

        <Works />
        
        {/* We craft experiences for business Section (Similar to Image 2 bottom part) */}
        <section id="about" className="bg-white py-20 md:py-32 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text font-bold leading-tight">
                        We craft experiences for<br/> business to help reach<br/>
                        <span className="relative inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                            our customers
                            <span className="absolute left-0 bottom-0 h-3 w-full bg-indigo-200 opacity-70 rounded-md -z-10 transform translate-y-2"></span>
                        </span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base text-gray-700">
                        We don&apos;t just build a website and walk away. Our process ensures that SEO, content, design, and user experience work in harmony from day one. A beautifully designed website is useless if no one can find it.
                    </p>
                    <div className="mt-8">
                        <a href="#contact" className="inline-block bg-gradient-to-br text-white font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px] shadow-indigo-700 from-purple-500 to-indigo-500  transition-all duration-300">
                        Learn more
                        </a>
                    </div>
                </div>
                {/* Placeholder Shape */}
                <div className="hidden md:flex justify-center items-center h-full">
                    <div className="w-64 h-full ">
                      <Image src={wave} alt='' className='object-cover h-full w-full'/>
                    </div>
                    <div className="w-64 h-full ">
                      <Image src={wave} alt='' className='object-cover h-full w-full'/>
                    </div>
                    <div className="w-64 h-full ">
                      <Image src={wave} alt='' className='object-cover h-full w-full'/>
                    </div>
                   
                </div>
            </div>
        </section>

        {/* Contact / CTA Section - Reusing previous footer CTA as it fits the clean style */}
        <section id="contact" className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start a Project?</h2>
            <p className="mt-4 text-lg text-gray-400">
              Let&apos;s talk about your goals. We offer a free, no-obligation consultation to discuss your project.
            </p>
            <div className="mt-8">
              <a href="mailto:contact@webonsolutions.in" className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
                Contact Us Now
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}