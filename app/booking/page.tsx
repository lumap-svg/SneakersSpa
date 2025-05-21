import Link from 'next/link';
import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';

export default function Page() {
  return (
    <div className="max-w-6xl h-full   mx-auto p-6 mt-10 border border-white text-white shadow-md rounded-md relative   ">
      {/* heading */}
     <div className='flex'>
      <Link href={'/'}> <FaAngleLeft className='text-3xl' />  </Link>
      <h1 className="text-2xl font-bold text-center mb-4">Ready to give your sneakers the spa treatment?</h1>
     </div>
     {/* booking form */}
      <form className=" grid grid-cols-2 gap-3">
        {/* div one parent container */}
      <div className='space-y-4 border border-gray-500 '>
        {/* first input  for customer name*/}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input  type="text"   id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md mt-1" required />
        </div>
{/* second input  for client contact number*/}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
          <input type="tel"  id="phoneNumber" name="phoneNumber" className="w-full p-2 border border-gray-300 rounded-md mt-1" required />
        </div>
{/* third input for clients address */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold">Address</label>
          <input  type="text" id="address" name="address" className="w-full p-2 border border-gray-300 rounded-md mt-1" required />
        </div>
</div>
<div className='space-y-2'>
        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-semibold">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          >
            <option value="">Select a service</option>
            <option value="standard">standard</option>
            <option value="Premium">Premium</option>
            <option value="Specialized">Specialized</option>
          </select>
        </div>

        {/* Drop-off Date */}
        <div>
          <label htmlFor="dropOffDate" className="block text-sm font-semibold">Drop-off date (optional)</label>
        <BookingInputComponent name='dopOffDate' type='date'/>
          
          
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            // rows=3
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

function BookingInputComponent({name,type}:{name:string, type:string}){
  return(
          <input type={type} name={name} className="w-full p-2 border border-gray-300 rounded-md mt-1" />
      
  )
}