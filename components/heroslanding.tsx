import Image from 'next/image'
import React from 'react'

export default function 
() {
  return (
    <div className='flex  my-3 bg-gray-200 gap-2 rounded-lg'>
        {/* image */}
        <Image className='rounded-r-full ' src={'/daniel-storek-JM-qKEd1GMI-unsplash.jpg'}  width={500} height={400} alt='shoe game' />
                {/* message */}
                <div className=' flex flex-col justify-around'>
                    <h1 className='text-5xl font-bold text-left'>Give Your Sneakers the Spa Treatment They Deserve!</h1>
                    <h3 className='text-3xl font-semibold text-[#fbbe30]'>Machine-washed, dried, and ready in just 2 hours.</h3>
                    <button className='rounded-full bg-blue-600 w-[200]  p-3 '>Get Started</button>
                </div>
    </div>
  )
}
