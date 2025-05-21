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
        const {name, email, password } = validatedFields.data
    console.log("form data validation was a success")
    console.log('User signed up with:', name, email)
    
  }
    // if (password !== confirmPassword) {
    //     return { error: 'Passwords do not match' }
    // }
    
    // // Simulate a signup process

        return {
        message: 'Account created successfully!',
    }
}