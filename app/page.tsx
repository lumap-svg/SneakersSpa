import Footer from "@/components/footer";
import Header from "@/components/Header";
import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
   <Header />
    <main className="max-w-6xl h-[80%] mx-auto mt-4 ">
      {/* welcoming heros landing page */}
      
      <Heroslanding />
    
   

      <HowItWorks />
 
      <Footer />
    </main>
    

    </>  );
}
