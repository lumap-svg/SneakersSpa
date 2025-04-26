import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    
      <main className='border bg-white rounded-md h-full'>
        <header className='bg-gray-200 p-2 rounded-sm w-[98%] mx-auto flex items-center justify-around shadow-md mt-1'>
          <Image src={'/sneakers spa 254.jpeg'} width={50} height={50} alt='company logo' className='rounded-full'/>
          <ul className='flex gap-3 capitalize font-semibold'>
            <li>Dashboard</li>
            <li className='text-blue-600'>Orders</li>
            <li>Customers</li>
            <li>Enquiries</li>
          </ul>
          <div>
            <h2>Profile</h2>
          </div>
        </header>

        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-between pt-3 mx-1'>
            <h1 className='text-lg font-bold'>Order List</h1>
            <button className='bg-blue-600 text-white text-lg p-1 capitalize rounded-md'> create order</button>
          </div>
{/* order status section */}
<div className='flex gap-3 border-b mb-1'>
  <button className='p-2 border-b border-blue-500 capitalize font-bold' >All orders</button>
  <button>pending</button>
  <button>completed</button>
  </div>

{/* order list */}
<div className='max-h-[600px] overflow-y-scroll mx-1'>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
  <ul className='flex justify-between shadow-sm p-1 capitalize py-3'>
    <li><input type="checkbox"/></li>
    <li>Order Id</li>
    <li>Status</li>
    <li>created at</li>
    <li> customer</li>
  </ul>
</div>
        </div>
        
      </main>
    
  )
}
