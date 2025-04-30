import React from 'react'
import { InputComponent } from './InputComponent'
import Link from 'next/link'
export default function SignIn() {
  const  name:string = 'peter' 
  return (
    
    <>{name ? <SignUp /> :<p>not avalab</p>}</>
  
  )
}
export function SignInto(){
  return
  (
    <div className='w-full grid grid-cols-2 border py-3 px-2 rounded-md'>
    <div className='flex justify-center items-center bg-gray-400'>

    <h2  className='text-center uppercase font-bold'>sign In</h2>
    </div>
    <form className='space-y-4 w-full flex flex-col backdrop-blur-md shadow-md rounded-md mx-auto p-2 gap-1' action="">
        <div ><label htmlFor="name"></label><InputComponent type='name' placeholder='name' /> </div>
        <div><label htmlFor="email"></label><InputComponent type='email' placeholder='email' /></div>
        <div><label htmlFor="email"></label><InputComponent type='password ' placeholder='password'/> </div>
        <Link href={'#forgot password'} className='text-blue-400'>forgot password ?</Link>
        <div className='grid grid-rows-2 gap-2'>
        <button className='border border-blue-500 p-2 px-3 rounded-md font-semibold' type="submit">Sign In</button>
        <p>dont have an account <a className='text-blue-400' href="sign in">create ? </a></p>


        </div>
    </form>
    </div>
  )
}
export function SignUp(){
  // const [state, action, pending] = useActionState(signup, undefined)

  return(
    <div className='w-full grid sm:grid-cols-2  bg-gray-600 py-3 px-2 rounded-md'>
    <div className=' flex justify-center items-center '>
    <h2  className='text-center uppercase font-bold'>sign up</h2>
    </div>
    <form className='space-y-4 w-full flex flex-col backdrop-blur-md shadow-md rounded-md mx-auto p-2 gap-1' >
    {/* {state?.errors?.name && <p>{state.errors.name}</p>} */}

   
        <div ><label htmlFor="name"></label><InputComponent type='name' placeholder='name' /> </div>
        <div><label htmlFor="email"></label><InputComponent type='email' placeholder='email' /></div>
        <div><label htmlFor="email"></label><InputComponent type='password ' placeholder='new password'/> </div>
        <div><label htmlFor="email"></label><InputComponent type='password ' placeholder=' confirm password'/> </div>
        <div className='grid grid-cols-2 gap-2'>
        <button className='border border-blue-500 p-2 px-3 rounded-md font-semibold' type="submit">Sign In</button>
        <button className='border border-blue-500 p-2 px-3 rounded-md font-semibold' type="submit">Sign Up</button>

        </div>
    </form>
    </div>
  )
}
