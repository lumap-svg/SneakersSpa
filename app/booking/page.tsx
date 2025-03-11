"use client"
import React, { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    dropOffDate: '',
    serviceType: '',
    specialRequests: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-4">Ready to give your sneakers the spa treatment?</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-semibold">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
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
          <input
            type="date"
            id="dropOffDate"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
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
      </form>
    </div>
  );
}
