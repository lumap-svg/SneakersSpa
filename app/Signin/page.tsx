import Header from '@/components/Header'
import SignIn from '@/components/SignIn'
import React from 'react'

export default function page() {
  return (
   <>
   <Header />
     <main className='max-w-6xl h-[80%] mx-auto  flex  flex-col justify-center items-center overflow-hidden'>

        <SignIn />
        
     </main>
      </>
  )
}
