import axios from 'axios';

const TEST_API_BASE_URL = 'http://localhost:8080';
const PROD_API_BASE_URL = 'https://vatra.up.railway.app';

const api = axios.create({
  baseURL: PROD_API_BASE_URL,
});

export default api;