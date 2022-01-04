const { Schema, model } = require('mongoose');
const {
  Types: { ObjectId },
} = Schema;

const productSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Product = model('Product', productSchema);

module.exports = Product;
