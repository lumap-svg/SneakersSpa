import Footer from "@/components/footer";
import Header from "@/components/Header";
import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
    <div className="w-full h-screen ">
      {/* https://www.pinterest.com/pin/shoe-clean-service-landing-page--1054264594003232096/ */}
 
    <Header />
    <main className="max-w-6xl mx-auto mt-4 ">

      {/* welcoming heros landing page */}
      
      <Heroslanding />
    
   
     {/* procedure of how operations work */}
      <HowItWorks />
      {/* services offered */}
      {/* why choose us */}
      {/* customer testimonials */}
      {/* Booking section */}
      <Footer />
    </main>
    
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
        {/* <Footer /> */}
 
    
    </div>
    </>  );
}
