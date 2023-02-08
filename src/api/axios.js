import axios from "axios";

export const BASE_URL = 'https://matoa-api.onrender.com';

axios.defaults.baseURL = BASE_URL;

export const fetchAllProducts = async () => {
  return await axios.get('/products').then(response => response.data.data);
};