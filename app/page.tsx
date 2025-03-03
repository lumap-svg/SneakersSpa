import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* https://www.pinterest.com/pin/shoe-clean-service-landing-page--1054264594003232096/ */}
    <header className="flex items-center gap-2 flex-grow mb-1">
      
                  <Image className='rounded-full mt-3 bg-white' src={'/sneakers spa 254.jpeg'} alt={'company log'} width={200} height={200} />
                  <h2 className="text-4xl font-bold uppercase text-[#ebd455f8] ">Sneakers spa 254  </h2>
                 <button className="ml-auto uppercase font-semibold border-2 p-2 px-3 border-blue-500 rounded-full text-[#ebd455f8]">login</button>
      
    </header>
    <hr className="w-full mx-1"/>
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
    </footer>
    </div>  );
}
