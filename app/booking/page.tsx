'use client'
import Header from '@/components/Header';
import Link from 'next/link';
import { useActionState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { BookingAction } from '../actions/actions';

export default function Page() {
 
  const [state, action] = useActionState(BookingAction, {
    error: {},
    message: undefined,
  })
       
  return (
    <>
      <Header />
    <main className="max-w-6xl mx-auto p-4 md:p-6 mt-6 md:mt-10 border border-white text-white shadow-md rounded-md">
  {/* Heading */}
  <div className="flex items-center gap-2 mb-6">
    <Link href="/">
      <FaAngleLeft className="text-2xl" />
    </Link>
    <h1 className="text-xl md:text-2xl font-bold">
      Ready to give your sneakers the spa treatment?
    </h1>
  </div>

  {/* Booking Form */}
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action={action}>
    {/* Left Column */}
    <div className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-semibold">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="optional"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          required
        />
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-4">
      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          required
        >
          <option value="">Select a service</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Specialized">Specialized</option>
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold">
          Number of Pairs <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          min="1"
          placeholder="e.g., 2"
          required
        />
      </div>

      {/* Drop-off Date */}
      <div>
        <label htmlFor="dropOffDate" className="block text-sm font-semibold">
          Drop-off Date (optional)
        </label>
        <input
          type="date"
          id="dropOffDate"
          name="dropOffDate"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
      </div>
 
      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-semibold">
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="Optional notes (e.g., remove paint stains)"
        />
      </div>
</div>
      {/* Terms and Conditions */}
      <div className="flex items-center gap-2"> 
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          required
        />
        <label htmlFor="terms" className="text-sm">
          I agree to the{' '}
          <Link href="/terms" className="text-blue-500 hover:underline">
            terms and conditions
          </Link>
        </label>

    </div>
          <div className="pt-2 md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg font-semibold"
        >
          Submit
  </button>
</div>
  </form>
</main>

    </>
  );
}