import Footer from "@/components/footer";
import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="w-full h-screen">
      {/* https://www.pinterest.com/pin/shoe-clean-service-landing-page--1054264594003232096/ */}
 
    <header className="px-2shadow-md flex flex-col sm:flex-row items-center gap-2 sm:gap-4 m-2">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex flex-col sm:flex-row items-center gap-2 sm:gap-4 m-2">
 */}
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
          <h2 className="text-2xl hidden md:block sm:text-4xl font-bold uppercase text-[#ebd455f8]">
            Sneakers Spa 254
          </h2>
        </div>

        {/* Login Button */}
        <Link href={'/Signin'} className="ml-auto mt-3 sm:mt-0 uppercase font-semibold border-2 p-2 px-4 border-blue-500 rounded-full text-[#ebd455f8]">
          Login
        </Link>
      </header>
    <hr className="w-full mx-1 border border-[#ebd455f8] " />
    <main className="max-w-6xl mx-auto mt-4 ">

      {/* welcoming heros landing page */}
      
      <Heroslanding />
    
   
   <div>
   </div>

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
    <div className="top-0">

    </div>
    </div>
    </>  );
}
