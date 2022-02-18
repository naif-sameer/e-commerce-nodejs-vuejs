const axios = require('axios').default;
require('dotenv').config();

const getProducts = () => {
  return axios.get(`${process.env.API_URL}/products`);
};

module.exports = {
  getProducts,
};
