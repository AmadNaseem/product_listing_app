// lib/api.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_ENDPOINT_URL

export const fetchListings = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
