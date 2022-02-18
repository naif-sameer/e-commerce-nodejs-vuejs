const { Router } = require('express');
const router = Router();

const { getProducts } = require('../api');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    text: 'Hi man :)',
  });
});

// products
router.get('/products', async (req, res) => {
  try {
    const { data } = await getProducts();

    res.json({ ...data, error: false });
  } catch (err) {
    res.json({
      error: true,
      err,
    });
  }
});

module.exports = router;
