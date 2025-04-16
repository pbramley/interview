// services/api.ts
import axios from 'axios';

const ENDPOINT_URL_PATH = 'https://api.example.com';
const DEFAULT_APPLICATION_TYPE = 'application/json';

/**
 * Wrapper around axios, specifically to utilise a known API path.
 */
export const axiosApi = axios.create({
   baseURL: ENDPOINT_URL_PATH,
   headers: {
      'Content-Type': DEFAULT_APPLICATION_TYPE,
   },
});
