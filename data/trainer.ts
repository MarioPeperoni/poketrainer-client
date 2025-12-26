'use server';

import axios from 'axios';
import z from 'zod';

import { TrainerFormSchema } from '@/schemas/trainer';

const apiUrl = process.env.BACKEND_URL;

export async function SubmitTrainerData(data: z.infer<typeof TrainerFormSchema>) {
  try {
    const validatedFields = TrainerFormSchema.safeParse(data);
    if (!validatedFields.success) {
      throw new Error('Validation failed');
    }

    const response = await axios.post(`${apiUrl}/api/trainer`, validatedFields.data);

    if (response.status === 200) {
      return { success: true };
    }
  } catch (error) {
    console.error('Error submitting trainer data:', error);
    return { success: false, error: 'Validation failed' };
  }
}
