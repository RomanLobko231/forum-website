import axios from 'axios';

const TEST_API_BASE_URL = 'http://localhost:8080';
const PROD_API_BASE_URL = 'https://vatra.up.railway.app';

const api = axios.create({
  baseURL: PROD_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default api;