const { model, Schema } = require('mongoose');

const {
  Types: { ObjectId },
} = Schema;

const cartSchema = new Schema(
  {
    products: {
      type: [ObjectId],
      ref: 'Product',
    },
    userId: {
      type: ObjectId,
      ref: 'User',
    },
    fulfilled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;
