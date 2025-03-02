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
            title: 1,
            description:"contact us for pick up",
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae itaque vitae neque! Soluta fugiat nesciunt amet, voluptatum reiciendis minus nam delectus repellendus assumenda! Earum reiciendis ratione provident placeat recusandae?",
            connect:"contact"
        },
        {
            title: 2,
            description:"contact us for pick up",
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae itaque vitae neque! Soluta fugiat nesciunt amet, voluptatum reiciendis minus nam delectus repellendus assumenda! Earum reiciendis ratione provident placeat recusandae?",
            connect:"contact"
        },
        {
            title: 3,
            description:"contact us for pick up",
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae itaque vitae neque! Soluta fugiat nesciunt amet, voluptatum reiciendis minus nam delectus repellendus assumenda! Earum reiciendis ratione provident placeat recusandae?",
            connect:"contact"
        },
        {
            title: 4,
            description:"contact us for pick up",
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae itaque vitae neque! Soluta fugiat nesciunt amet, voluptatum reiciendis minus nam delectus repellendus assumenda! Earum reiciendis ratione provident placeat recusandae?",
            connect:"contact"
        },
    ]
    
  return (
    <div className='grid md:grid-cols-4 gap-2 mx-auto grid-cols-2 sm:mx-2 '>
        {
            procedural.map(()=> 
    <Card className='flex flex-col '>
  <CardHeader>
    <CardTitle className='flex justify-center'>01</CardTitle>
    <CardDescription className='font-bold text-2xl text-center capitalize'>contact us for pick up</CardDescription>
  </CardHeader>
  <CardContent className=''>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae itaque vitae neque! Soluta fugiat nesciunt amet, voluptatum reiciendis minus nam delectus repellendus assumenda! Earum reiciendis ratione provident placeat recusandae?</p>
  </CardContent>
  <CardFooter className='flex justify-center font-semibold text-2xl'>
    <a href="/contact">contact</a>
  </CardFooter>
</Card>
)
}
{/* 
<Card>
  <CardHeader>
    <CardTitle>02</CardTitle>
    <CardDescription>Your shoes are picked up</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam at aut distinctio quidem in accusamus, quis iusto nostrum! Nam animi quae quo corporis, et quisquam voluptatem eveniet quibusdam sequi! </p>
  </CardContent>
  <CardFooter>
    <p>more details</p>
  </CardFooter>
</Card>

<Card>
  <CardHeader>
    <CardTitle>03</CardTitle>
    <CardDescription>Cleaning process</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia! Soluta sit expedita aperiam perspiciatis laudantium dolor eveniet consequuntur aut quos ab quas nostrum hic impedit, qui sapiente quibusdam minima.</p>
  </CardContent>
  <CardFooter>
    <p>more details</p>
  </CardFooter>
</Card>
<Card>
  <CardHeader>
    <CardTitle>04.</CardTitle>
    <CardDescription>Ready to be deliveredto you</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis veniam, ab cumque, incidunt nostrum, error molestiae ea pariatur consectetur odio? Aliquid provident cupiditate nisi, itaque in aut repudiandae voluptatibus.</p>
  </CardContent>
  <CardFooter>
    <p>contact</p>
  </CardFooter>
</Card> */}


    </div>

  )
}

