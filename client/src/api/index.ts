import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

const getProducts = api.get('/products');

export { getProducts };
