import axios from 'axios';

const api = axios.create({
  // Hardcoding the address temporarily forces the browser to look exactly at your running backend
  baseURL: 'http://localhost:5001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;