const axios = require('axios').default;
require('dotenv').config();

const getProducts = () => axios.get(`${process.env.API_URL}/products`);

const getProduct = (id) => axios.get(`${process.env.API_URL}/products/${id}`);

const getCategories = () => axios.get(`${process.env.API_URL}/products/categories`);

const getCategoryProducts = (category) => axios.get(`${process.env.API_URL}/products/category/${category}`);

const getProdcutSearch = (product) => axios.get(`${process.env.API_URL}/products/search?q=${product}`);

module.exports = {
  getProducts,
  getProduct,
  getCategories,
  getCategoryProducts,
  getProdcutSearch,
};
