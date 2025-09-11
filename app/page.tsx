import Footer from "@/components/footer";
import Header from "@/components/Header";
import Heroslanding from "@/components/heroslanding";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className=" grid grid-row-[auto_1fr_auto] min-h-screen ">
   <Header />
    <main className="max-w-6xl row-start-2 mx-auto mt-4 ">
      {/* welcoming heros landing page */}
      
      <Heroslanding />
    
   

      <HowItWorks />
 
    </main>
      <Footer />
    

    </div>  );
}
