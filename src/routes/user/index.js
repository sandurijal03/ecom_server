const { Router } = require('express');
const { check } = require('express-validator');
const { register } = require('./user.controller');

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>User test route</h1>');
});

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have atleast 5 character').isLength({
      min: 5,
    }),
  ],
  register,
);

module.exports = router;
