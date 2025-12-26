'use server';

import axios from 'axios';
import type { TimeResponse } from '@/types/time';

export async function GetNTPTime() {
  const apiUrl = process.env.BACKEND_URL;
  const response = await axios.get(`${apiUrl}/api/time`);
  return response.data as TimeResponse;
}
