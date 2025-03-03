import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
        <header className=' h-24 px-2 flex flex-grow justify-between items-end'>
            <div className='flex items-end'>

            <Image className='rounded-full mt-3 bg-white' src={'/sneakers spa 254.jpeg'} alt={'company log'} width={150} height={200} />
            <div className='flex items-end gap-1'>
            <h2 className='uppercase  text-3xl font-semibold  '>sneaker spa</h2>
            </div>
            
                
            <ul className='flex gap-3  font-semibold uppercase '>
                <li>orders</li>
                <li>customers </li>
                <button className='uppercase'>messages</button>
                <li>payments</li>
                
            </ul>
            </div>
        </header>
            <hr className='font-bold w-full'/>
            <main>
                
            </main>
        </div>
  )
}
