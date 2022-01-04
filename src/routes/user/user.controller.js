const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../../models/User');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = await new User({
      name,
      email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    const payload = {
      user: {
        id: newUser.id,
      },
    };
    const token = generateToken(payload);
    return res.status(200).json({ success: true, token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

module.exports = {
  register,
};
