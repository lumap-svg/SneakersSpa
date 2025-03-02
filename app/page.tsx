import Display from "@/components/Display";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <header></header>
    <main className=" max-w-6xl mx-auto ">
      {/* welcoming heros landing page */}
      
      <Display />
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
