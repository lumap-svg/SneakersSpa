'use client';
import React, { useActionState, useState } from 'react';
import { InputComponent } from './InputComponent';
import Link from 'next/link';
import { signup } from '@/app/actions/auth';

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 bg-white p-6 md:p-10 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {isSignIn ? 'Welcome Back' : 'Create Your Account'}
      </h2>

      {isSignIn ? <SignInto /> : <SignUp />}

      <div className="mt-6 text-center text-sm text-gray-600">
        {isSignIn ? (
          <>
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSignIn(false)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSignIn(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function SignInto() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="hidden md:flex justify-center items-center bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-bold uppercase text-gray-700">Sign In</h2>
      </div>

      <form className="space-y-4 w-full" action="">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-sm text-gray-700">
            Name
          </label>
          <InputComponent type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-sm text-gray-700">
            Email
          </label>
          <InputComponent type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-sm text-gray-700">
            Password
          </label>
          <InputComponent type="password" placeholder="Enter your password" />
        </div>

        <div className="text-right">
          <Link href="#" className="text-blue-500 text-sm hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export function SignUp() {
  const [state, action] = useActionState(signup, undefined);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="hidden md:flex justify-center items-center bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-bold uppercase text-gray-700">Sign Up</h2>
      </div>

      <form action={action} className="space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-sm text-gray-700">
            Name
          </label>
          <InputComponent type="name" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-sm text-gray-700">
            Email
          </label>
          <InputComponent type="email" placeholder="Your email" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-sm text-gray-700">
            Password
          </label>
          <InputComponent type="password" placeholder="New password" />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-medium text-sm text-gray-700">
            Confirm Password
          </label>
          <InputComponent type="password" placeholder="Confirm password" />
        </div>

        {state?.message && (
          <p className="text-green-600 text-sm font-medium">{state.message}</p>
        )}
        {state?.error?.email && (
          <p className="text-red-500 text-sm">{state.error.name}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
