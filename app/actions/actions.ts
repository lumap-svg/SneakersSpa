'use server';

import { BookingFormSchema, BookingState } from '@/lib/definitions';


import { redirect } from 'next/navigation';

export async function BookingAction(
  state: BookingState,
  formData: FormData
): Promise<BookingState> {
  // Extract values from formData
  const rawValues = {
    name: formData.get('name')?.toString() || '',
    phoneNumber: formData.get('phoneNumber')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    address: formData.get('address')?.toString() || '',
    serviceType: formData.get('serviceType')?.toString() || '',
    quantity: formData.get('quantity')?.toString() || '',
    dropOffDate: formData.get('dropOffDate')?.toString() || '',
    specialRequests: formData.get('specialRequests')?.toString() || '',
    terms: formData.get('terms')?.toString() || '',
  };

  // Validate with Zod
  const validated = BookingFormSchema.safeParse(rawValues);

  if (!validated.success) {
    console.log('Validation failed');
    return {
      errors: {
        name: validated.error.flatten().fieldErrors.name,
        phoneNumber: validated.error.flatten().fieldErrors.phoneNumber,
        address: validated.error.flatten().fieldErrors.address,
        quantity: validated.error.flatten().fieldErrors.quantity ?? [],
      },
      message: 'Please correct the errors below.',
      values: rawValues,
    };
  }

  // Proceed with booking logic
  console.log('Booking successful:', validated.data);
  redirect('/booking/confirmation');

  return {}; // for TypeScript only, unreachable
}
