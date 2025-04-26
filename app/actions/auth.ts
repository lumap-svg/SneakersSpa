
'use server'

import { FormState } from "@/lib/definitions"

export async function signup(state:FormState, formData: FormData) {
    
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    
    // Validate the data
    if (!name || !email || !password || !confirmPassword) {
        return { error: 'All fields are required' }
    }
    
    if (password !== confirmPassword) {
        return { error: 'Passwords do not match' }
    }
    
    // Simulate a signup process
    console.log('User signed up with:', { name, email, password })
    return { success: true }
}