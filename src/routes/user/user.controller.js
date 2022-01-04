const { validationResult } = require('express-validator');
const User = require('../../models/User');

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
    user = await new User({
      name,
      email,
      password,
    });
    const newUser = await user.save();
    return res.status(200).json({ user: newUser });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

module.exports = {
  register,
};
