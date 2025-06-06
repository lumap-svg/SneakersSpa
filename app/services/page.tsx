'use client';

import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';


const services = [
  {
    name: 'Standard Cleaning',
    description: 'Deep clean your sneakers using eco-friendly products to remove dirt and stains.',
    icon: '/icons/standard-cleaning.png',
  },
  {
    name: 'Premium Detailing',
    description: 'Includes standard cleaning plus midsole whitening, lace replacement, and deodorizing.',
    icon: '/icons/premium-cleaning.png',
  },
  {
    name: 'Specialized Restoration',
    description: 'Color touch-up, sole reglue, and sneaker-specific material care (e.g., suede, mesh).',
    icon: '/icons/restoration.png',
  },
  {
    name: 'Sole Repaint',
    description: 'Get your yellowed soles restored and repainted for that fresh-out-the-box look.',
    icon: '/icons/sole-repaint.png',
  },
  {
    name: 'Waterproofing',
    description: 'Protect your sneakers from water damage and stains using advanced hydrophobic coating.',
    icon: '/icons/waterproof.png',
  },
];

export default function ServicesPage() {
  return (
    <>
    <Header />
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#ebd455f8]">Our Sneaker Care Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-all p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* <Image
                src={service.icon}
                alt={service.name}
                width={50}
                height={50}
                className="object-contain"
              /> */}
              <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl text-[#ebd455f8] font-semibold mb-4">Ready to pamper your kicks?</h2>
        <Link
          href="/booking"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Book a Service
        </Link>
      </div>
    </main>
    <FAQSection />
    </>
  );
}
