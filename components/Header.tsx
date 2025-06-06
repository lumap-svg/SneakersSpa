import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="px-2 shadow-md grid grid-cols-3 gap-2 sm:gap-4 m-2 z-10 sticky top-1 ">
          {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex flex-col sm:flex-row items-center gap-2 sm:gap-4 m-2">
     */}
            {/* Logo */}
            <div className="flex items-center  gap-3">
              <Image
                className="rounded-full bg-white"
                src="/sneakers spa 254.jpeg"
                alt="Company Logo"
                width={100}
                height={100}
            
              />
              <h2 className="text-2xl hidden md:block sm:text-4xl font-bold uppercase text-[#ebd455f8]">
                Sneakers Spa 254
              </h2>
            </div>
            {/* Navigation Links */}
            <nav className="flex items-center justify-center gap-4 text-lg font-semibold  text-[#ebd455f8] uppercase">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link href="/services" className="hover:text-blue-500">
                Services
              </Link>
              <Link href="/booking" className="hover:text-blue-500">
                Book Now
              </Link>
              <Link href="/faqs" className="hover:text-blue-500">
                FAQ
              </Link> 
             
            </nav>

    
            {/* Login Button */}
            <div className="flex justify-end items-center gap-2">
    
            <Link href={'/Signin'} className="px-3 py-2  uppercase font-semibold border-2  border-blue-500 rounded-full text-[#ebd455f8]">
              Login
            </Link>
            </div>
            
          </header>
  )
}
