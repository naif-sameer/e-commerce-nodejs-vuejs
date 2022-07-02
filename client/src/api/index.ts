import axios from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL as string;

const api = axios.create({ baseURL: API_URL });

const getProducts = () => api.get('/products');

const getProduct = (id: number): object => api.get(`/products/${id}`);

const getCategories = (): object => api.get(`/products/categories`);

const getCategoryProducts = (category: string): object =>
  api.get(`/products/category/${category}`);

export { getProducts, getProduct, getCategories, getCategoryProducts };
