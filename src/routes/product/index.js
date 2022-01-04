const { Router } = require('express');
const { check } = require('express-validator');

const {
  createProduct,
  getAllProduct,
  getSingleProduct,
} = require('./product.controller');

const router = Router();

router.get('/', getAllProduct);
router.get('/id', getSingleProduct);
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Product name is required').not().isEmpty(),
      check('description', 'Product description is required'),
      check('category', 'Product category is required'),
      check('price', 'Product price is required'),
      check('quantity', 'Product quantity is required'),
    ],
  ],
  createProduct,
);

module.exports = router;
