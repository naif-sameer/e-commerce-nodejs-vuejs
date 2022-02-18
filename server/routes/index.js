// const axios = require('axios').default;
// import {axios from 'axios'
// const api = require('./../api/axios');
const { Router } = require('express');

const router = Router();

const axios = require('axios');

const api = axios.create({
  baseURL: 'https://quickly-egypt.com/api/v1/client/',
});

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    text: 'Hi from express',
  });
});

router.get('/carts', async (req, res) => {
  // let data = await axios.get('https://dummyjson.com/products');
  try {
    // let data = await axios.get('https://jsonplaceholder.typicode.com/users');

    // api.get('/');

    res.json(data);
  } catch (e) {
    res.json({
      error: 404,
    });
  }

  // res.end
  // res.end('dd')
});

module.exports = router;
