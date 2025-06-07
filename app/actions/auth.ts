'use server'

import { FormState, SignupFormSchema } from "@/lib/definitions"
import { redirect } from "next/navigation"
// 'use server';

// import { redirect } from 'next/navigation';
// import { FormState } from './types';
// import { SignupFormSchema } from './schemas'; // zod schema

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // ✅ Validation failed
  if (!validatedFields.success) {
    console.log('Validation of form fields is invalid');

    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  // ✅ Validation succeeded
  const { name, email } = validatedFields.data;
  console.log('Form data validation was a success');
  console.log('User signed up with:', name, email);

  // ✅ Perform any additional logic (e.g., save to DB)

  // ✅ Redirect after all logic completes
  redirect('/dashboard');

  // ⚠️ Required to satisfy all control paths
  // But unreachable due to redirect()
  // Just to satisfy TypeScript, we can return something
  return {};
}

export async function signin(state:FormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        name:formData.get('name'),
        email:formData.get('email'),
        password :formData.get('password'),
    })
    
    // Validate the data
    if (!validatedFields.success) {
            console.log("validation of form fields are invalid")

        return { error: validatedFields.error.flatten().fieldErrors }
    }
    else {
        const {name, email} = validatedFields.data
    console.log("form data validation was a success")
    console.log('User signed in with:', name, email)
    
  }
    
    return {
        message: 'Sign in successful!',
    }
}