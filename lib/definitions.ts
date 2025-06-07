import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',   
    })
    .trim(),
})

export const BookingFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Invalid email'),
  address: z.string().min(1, 'Address is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  dropOffDate: z.string().min(1, 'Drop-off date is required'), // or use z.date() if you're parsing
  specialRequests: z.string().optional(),
  terms: z.literal('on', { errorMap: () => ({ message: 'You must accept the terms' }) }),
});






// export type FormState =
//   | {
//       errors?: { name?: string[],email?: string[], password?: string[] },
//       message?:string
//     }
//     | undefined
export interface FormState {
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
}


  // types/booking.ts
export type BookingState = {
  errors?: {
    name?: string[];
    phoneNumber?: string[];
    address?: string[];
    quantity: string[];
  };
  message?: string;
  values?: {
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    serviceType: string;
    quantity: string;
    dropOffDate: string;
    specialRequests: string;
    terms: string;
  };
};
export interface Booking {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  serviceType: string;
  quantity: number;
  dropOffDate?: string;
  specialRequests?: string;
}
export interface BookingFormData {
  name: string;
  phoneNumber: string;
  email?: string;
  address: string;
  serviceType: string;
  quantity: number;
  dropOffDate?: string;
  specialRequests?: string;
}