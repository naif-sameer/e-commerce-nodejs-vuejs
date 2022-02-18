const { Router } = require('express');
const router = Router();

const { getProducts, getProduct } = require('../api');

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

// product details
router.get('/products/:id', async (req, res) => {
  const productID = req.params.id;
  try {
    const { data } = await getProduct(productID);

    res.json({ ...data, error: false });
  } catch (err) {
    res.json({ error: true, err });
  }
});

module.exports = router;
