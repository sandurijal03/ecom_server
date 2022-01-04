const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'customer',
      enum: ['customer', 'merchant'],
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

module.exports = User;
