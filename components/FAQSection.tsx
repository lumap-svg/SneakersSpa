'use client'
import React, { useState } from 'react'
import Footer from '@/components/footer'


const faqs = [
  {
    question: "How long does a sneaker cleaning take?",
    answer: "Typically, cleaning takes 24 to 48 hours depending on the service and condition of the sneakers.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes, we offer pickup and delivery within select areas in Nairobi.",
  },
  {
    question: "What types of sneakers can you clean?",
    answer: "We clean all types including leather, suede, canvas, and knit sneakers. Specialized materials may require premium service.",
  },
  {
    question: "Can I track the progress of my order?",
    answer: "Yes, once your order is in progress, you'll receive updates via SMS or WhatsApp.",
  },
]
export default function FAQSection() {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
  
    <section className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#ebd455f8]">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-4 shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-medium text-lg flex justify-between items-center"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  )
}


