const Product = require('../../models/Product');
const { validationResult } = require('express-validator');

const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, description, category, price, brand, quantity } = req.body;
    const newProduct = await new Product({
      userId: req.user.id,
      name,
      description,
      category,
      price,
      brand,
      quantity,
    });
    const product = await newProduct.save();
    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    return res.status(200).json({ err });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ msg: 'No any products to show.' });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
};
