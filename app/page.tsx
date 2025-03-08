import Footer from "@/components/footer";
import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* https://www.pinterest.com/pin/shoe-clean-service-landing-page--1054264594003232096/ */}
 
    <header className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 m-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full bg-white"
            src="/sneakers spa 254.jpeg"
            alt="Company Logo"
            width={100}
            height={100}
            layout="intrinsic"
          />
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-[#ebd455f8]">
            Sneakers Spa 254
          </h2>
        </div>

        {/* Login Button */}
        <button className="ml-auto mt-3 sm:mt-0 uppercase font-semibold border-2 p-2 px-4 border-blue-500 rounded-full text-[#ebd455f8]">
          Login
        </button>
      </header>
    <hr className="w-full mx-1 border border-[#ebd455f8] " />
    <main className=" max-w-6xl mx-auto mt-4 ">

      {/* welcoming heros landing page */}
      
      <Heroslanding />
      {/* procedure of how operations work */}
      <HowItWorks />
      {/* services offered */}
      {/* why choose us */}
      {/* customer testimonials */}
      {/* Booking section */}
      
    </main>
    <footer>
      {/* quick links */}
        {/* Home */}
        {/* services */}
        {/* Book now */}
        {/* FAQ */}
        {/* terms and conditions */}
        {/* privacy policy */}
      {/* contacts */}
        {/* phone */}
        {/* email */}
        {/* social media links */}
        <Footer />
    </footer>
    </div>  );
}
