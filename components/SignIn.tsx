'use client'
import React, { useActionState, useState } from 'react'
import { InputComponent } from './InputComponent'
import Link from 'next/link'
import { signup } from '@/app/actions/auth'
export default function SignIn() {
  // state to assist in hidding and showing of signin and signup form
  const [isSignIn, setIsSignIn] = useState(true); 

  return (
    

    <div className="w-full max-w-6xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </h2>

      {isSignIn ? (<SignInto />  ) : (<SignUp /> )}

      <div className="mt-4 text-sm text-center">
        {isSignIn ? (
          <>
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSignIn(false)}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account{'? '}
            <button
              type="button"
              onClick={() => setIsSignIn(true)}
              className="text-blue-600 hover:underline"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  
  )
}
export function SignInto(){
  return(
    <div className='w-full  grid grid-cols-2  py-3 px-2 rounded-md'>
    <div className='flex justify-center items-center bg-gray-400'>

    <h2  className='text-center uppercase font-bold'>sign In</h2>
    </div>
    <form className='space-y-4 w-full flex flex-col shadow-md rounded-md mx-auto p-2 gap-1' action="">
        <div ><label htmlFor="name"></label><InputComponent type='name' placeholder='name' /> </div>
        <div><label htmlFor="email"></label><InputComponent type='email' placeholder='email' /></div>
        <div><label htmlFor="email"></label><InputComponent type='password ' placeholder='password'/> </div>
        <Link href={'#forgot password'} className='text-blue-400'>forgot password ?</Link>
        <div className='grid grid-rows-2 gap-2'>
          <div></div>
        <button className='border w-full border-blue-500 p-2 px-3 rounded-md font-semibold' type="submit">Sign In</button>
       


        </div>
    </form>
    </div>
  )
}
export function SignUp(){
  const [state, action] = useActionState(signup,undefined)

  return(
    <div className='w-full grid sm:grid-cols-2   py-3 px-2 rounded-md'>
    <div className=' flex justify-center items-center bg-gray-400'>
    <h2  className='text-center uppercase font-bold '>sign up</h2>
    </div>
    <form action={action} className='space-y-4 w-full flex flex-col shadow-md rounded-md mx-auto p-2 gap-1' >

   
        <div ><label htmlFor="name"></label><InputComponent type='name' placeholder='name' /> </div>
        <div><label htmlFor="email"></label><InputComponent type='email' placeholder='email' /></div>
        <div><label htmlFor="email"></label><InputComponent type='password' placeholder='new password'/> </div>
        <div><label htmlFor="email"></label><InputComponent type='password' placeholder=' confirm password'/> </div>
        <div className='grid grid-rows-2 gap-2'>
          <div></div>
        <button className='border border-blue-500 p-2 px-3 w-full rounded-md font-semibold' type="submit">Sign In</button>
    {state?.message && <p className='text-green-400'>{state.message}</p>}
      {state?.error?.email && <p>{state.error.email[0]}</p>}

        </div>
    </form>
    </div>
  )
}
