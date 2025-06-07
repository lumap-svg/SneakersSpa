import Image from 'next/image'
import React from 'react'

export default function Aside() {
  return (
          <aside className="w-64 bg-gray-200 p-4 flex flex-col justify-between shadow-md">
       
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/sneakers spa 254.jpeg"
              width={40}
              height={40}
              alt="company logo"
              className="rounded-full"
            />
            <h2 className="font-bold text-lg">Sneakers Spa</h2>
          </div>
          <ul className="space-y-4 font-semibold text-gray-800">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="text-blue-600 font-bold cursor-pointer">Orders</li>
            <li className="hover:text-blue-600 cursor-pointer">Customers</li>
            <li className="hover:text-blue-600 cursor-pointer">Reports</li>
          </ul>
        </div>
        <div className="text-sm text-center font-semibold mt-6">
          {/* <h2 className="cursor-pointer hover:underline">Profile</h2> */}
          <button className='px-4 w-40  py-1 rounded-full font-medium border bg-blue-600 text-white'>Profile</button>
        </div>
   
      </aside>
  )
}
