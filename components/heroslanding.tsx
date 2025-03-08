import Image from 'next/image';
import React from 'react';

export default function Heroslanding() {
  return (
    <div className="flex flex-col md:flex-row my-6 px-4 md:px-12 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          className="rounded-lg object-cover"
          src="/daniel-storek-JM-qKEd1GMI-unsplash.jpg"
          width={1200}
          height={800}
          layout="responsive"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Shoe game"
        />
      </div>

      {/* Message Section */}
      <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 px-6 md:px-12 py-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Give Your Sneakers the Spa Treatment They Deserve!
        </h1>
        <h3 className="text-lg md:text-2xl font-semibold text-gray-600 mb-6">
          Machine-washed, dried, and ready in just 2 hours.
        </h3>
        <button className="w-max mx-auto md:mx-0 rounded-full border border-[#52480ff8] bg-yellow-500 text-white px-6 py-3 text-lg font-semibold transition transform hover:scale-105 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
}
