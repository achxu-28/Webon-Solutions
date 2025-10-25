
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageHero from './components/HomePageHero';
import Services from './components/Services';
import Works from './components/Works';
import wave from '../public/image/18px Wavy.png'
import Image from 'next/image';
import Wave2 from './smallThings/Wave2';
import teamVector from '../public/image/Horizontal Team Illustration.png';
import SimpleContactForm from './components/SimpleForm';




export default function HomePage() {
  return (
    <div className="font-poppins bg-orange-50 min-h-screen text-gray-900">
      
      <main>
        {/* Hero Section (Similar to Image 1 top part) */}
        <HomePageHero/>

        

        {/* Things We Enjoy / Our Services Section (Similar to Image 2) */}
        <Services/>

        <Works />
        
        {/* We craft experiences for business Section (Similar to Image 2 bottom part) */}
        <section id="about" className="bg-gradient-to-br to-[#8229d6] from-[#272993]  pt-25 pb-55 md:pt-45 md:pb-85 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <div className="text-left">
                    <h2 className="text-3xl md:text-4xl bg-gradient-to-r to-indigo-400 from-violet-500 via-purple-100 text-transparent bg-clip-text font-bold leading-tight">
                        We craft experiences for business to help reach 
                            our customers
                    </h2>
                    <p className="mt-6 max-w-lg  text-white md:text-[22px]">
                        We don&apos;t just build a website and walk away. Our process ensures that SEO, content, design, and user experience work in harmony from day one. A beautifully designed website is useless if no one can find it.
                    </p>
                    <div className="mt-8">
                        <a href="#contact" className="inline-block  text-white font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px]  shadow-indigo-700 bg-gradient-to-br from-purple-500 to-indigo-500  transition-all duration-300">
                        Learn more
                        </a>
                    </div>
                </div>
                {/* Placeholder Shape */}
                <div className="hidden md:flex justify-center items-center h-full">
                    <div className=" h-full ">
                      <Image src={teamVector} alt='' className='object-cover h-full w-full'/>
                    </div>
                    
                   
                </div>
            </div>
        </section>

        {/* Contact / CTA Section - Reusing previous footer CTA as it fits the clean style */}

        <div className='-mt-30 md:-mt-55 lg:-mt-65'><Wave2 /></div>
        <section id="contact" className="bg-[#161765] ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center bg-gradient-to-r to-indigo-400 from-violet-500 via-purple-100 text-transparent bg-clip-text">
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

      <SimpleContactForm/>
      
      <Footer />

      {/* sdfsdfd */}
    </div>
  );
}