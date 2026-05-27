import axios from 'axios';

const api = axios.create({
  // This automatically reads your clean cloud variable path!
  baseURL: import.meta.env.VITE_API_URL || "https://vi-enterprises-backend.onrender.com/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;