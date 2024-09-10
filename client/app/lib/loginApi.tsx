// lib/loginApi.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_ENDPOINT_URL;

interface LoginPayload {
  email: string;
  password: string;
}

export const loginApi = async (payload: LoginPayload) => {
  try {
    const response = await axios.post(`${API_URL}/login`, payload); // Directly pass payload as the body
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
