import FAQSection from '@/components/FAQSection'
import Header from '@/components/Header'


export default function page() {
  return (
    <>
      <Header />
      <main className="max-w-6xl h-[80%] mx-auto mt-4">
        <FAQSection />
      </main>
     
    </>
  )
}
