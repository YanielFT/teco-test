import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:"https://fakestoreapi.com/",
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la API:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;