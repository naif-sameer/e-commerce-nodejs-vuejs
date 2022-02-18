const axios = require('axios').default;
require('dotenv').config();

const getProducts = () => {
  return axios.get(`${process.env.API_URL}/products`);
};

const getProduct = (id) => {
  return axios.get(`${process.env.API_URL}/products/${id}`);
};

const getCategories = () => {
  return axios.get(`${process.env.API_URL}/products/categories`);
};

const getCategoryProducts = (category) => {
  return axios.get(`${process.env.API_URL}/products/category/${category}`);
};

module.exports = {
  getProducts,
  getProduct,
  getCategories,
  getCategoryProducts,
};
