'use server'

import { FormState, SignupFormSchema } from "@/lib/definitions"
import { redirect } from "next/navigation"

export async function signup(state:FormState, formData: FormData) {

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
    console.log('User signed up with:', name, email)
    redirect('/dashboard')
    
  }
    // if (password !== confirmPassword) {
    //     return { error: 'Passwords do not match' }
    // }
    
    // // Simulate a signup process

        return {
        message: 'Account created successfully!',
    }
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