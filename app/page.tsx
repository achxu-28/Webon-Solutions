import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageHero from "./components/HomePageHero";
import Services from "./components/Services";
import Works from "./components/Works";
import wave from "../public/image/18px Wavy.png";
import Image from "next/image";
import Wave2 from "./smallThings/Wave2";
import teamVector from "../public/image/Horizontal Team Illustration.png";
import SimpleForm from "./components/SimpleForm";

export default function HomePage() {
  return (
    <div className="font-poppins bg-orange-50 min-h-screen text-gray-900">
      <main>
        {/* Hero Section (Similar to Image 1 top part) */}
        <HomePageHero />

        {/* Things We Enjoy / Our Services Section (Similar to Image 2) */}
        <Services />

        <Works />

        {/* We craft experiences for business Section (Similar to Image 2 bottom part) */}
        <section
          id="about"
          className="relative bg-gradient-to-br to-[#f2ff0067] from-orange-300/40  pt-25 pb-55 md:pt-45 md:pb-85 "
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                We craft experiences for business to help reach our customers
              </h2>
              <p className="mt-6 max-w-lg  text-orange-800 md:text-[22px]">
                We don&apos;t just build a website and walk away. Our process
                ensures that SEO, content, design, and user experience work in
                harmony from day one. A beautifully designed website is useless
                if no one can find it.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block  text-white font-semibold py-3 px-8 rounded-lg hover:shadow-[3px_4px_0px_0px]  shadow-indigo-700 bg-gradient-to-br from-purple-500 to-indigo-500  transition-all duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Placeholder Shape */}
            <div className="hidden md:flex justify-center items-center h-full">
              <div className=" h-full ">
                <Image
                  src={teamVector}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full z-2 absolute -bottom-1 bg-gradient-to-b to-yellow-50  h-10"></div>
        </section>

        {/* Contact / CTA Section - Reusing previous footer CTA as it fits the clean style */}

        {/* <div className='-mt-20 md:-mt-55 lg:-mt-65'><Wave2 /></div> */}
        <section id="contact" className=" bg-yellow-50">
          <SimpleForm />
        </section>
      </main>

      <Footer />

      {/* sdfsdfd */}
    </div>
  );
}
