import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BASE_URL || 'localhost:3000',
});

const getProducts = () => axios.get('https://dummyjson.com/products');

export { getProducts };
