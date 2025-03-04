import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HowItWorks() {
    const procedural =[
      {
          position:1,
          title: "Pick-Up",
          description:"We come to you!",
          content:  "Our rider picks up your sneakers at your doorstep, ensuring convenience and a hassle-free experience",
          connect:"contact"
      },
      {
          position:2,
          title: "Advanced Cleaning Machines",
          description:"High-tech machines for the perfect clean.",
          content:  "Our state-of-the-art machines gently wash and dry all kinds of sneakers, from your beloved running shoes to your high-end designer kicks.",
          connect:"more details"
      },
      {
          position:3,
          title: "Quick Turnaround",
          description:"Time is precious, we get it",
          content:  "In just 2 hours, your shoes are cleaned, dried, and ready for wear—no more waiting days for shoe cleaning services!",
          connect:"more details"
      },
      {
          position:4,
          title: " drop-Off",
          description:"We come to you!",
          content:  "Once cleaned, we drop them back to you, so you don’t have to leave the comfort of your home.",
          connect:"contact"
      },
      
    ]
    
  return (
    <div  className='border rounded-md border-[#ebd455f8] p-2'>
<h2 className='text-3xl pl-5 my-3 font-bold uppercase text-[#ebd455f8]' >how it works</h2>
    <div className='grid md:grid-cols-4 gap-2 mx-auto grid-cols-2 sm:mx-2 '>
        {
          procedural.map(({position,title,description,connect,content})=> 
            <Card key={position} className='flex flex-col justify-between bg-none hover:bg-gray-700'>
  <CardHeader>
    <CardTitle className='flex justify-center font-bold text-2xl  '>{position}</CardTitle>
    <CardDescription className='text-2xl font-semibold text-center'>{title}</CardDescription>
    <CardDescription className='font-semibold text-lg text-center'>{description}</CardDescription>
  </CardHeader>
  <CardContent className='font-medium'>
    <p>{content}</p>
  </CardContent>
  <CardFooter className='flex justify-center font-semibold text-2xl'>
    <a href="/contact" className='border border-[#ebd455f8] px-2 py-1 rounded-full text-blue-500 capitalize'>{connect} {'>'} </a>
  </CardFooter>
</Card>
)
}

    </div>
</div>

  )
}

