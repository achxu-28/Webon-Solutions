import Footer from "./components/Footer";
import HomePageHero from "./components/HomePageHero";
import Services from "./components/Services";
import Works from "./components/Works";
import SimpleForm from "./components/SimpleForm";
import WeCraftExp from "./components/WeCraftExp";

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
        <WeCraftExp/>

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
