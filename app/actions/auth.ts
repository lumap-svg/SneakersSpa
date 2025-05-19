'use server'

import { FormState, SignupFormSchema } from "@/lib/definitions"

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
    console.log("form data validation was a success")
  }
    // if (password !== confirmPassword) {
    //     return { error: 'Passwords do not match' }
    // }
    
    // // Simulate a signup process
    // console.log('User signed up with:', { validatedFields. , email, password })
    // return { success: true }
        return {
        message: 'Account created successfully!',
    }
}