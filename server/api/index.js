const axios = require('axios').default;
require('dotenv').config();

const getProducts = () => {
  return axios.get(`${process.env.API_URL}/products`);
};

const getProduct = (id) => {
  return axios.get(`${process.env.API_URL}/products/${id}`);
};

module.exports = {
  getProducts,
  getProduct,
};
