const { Router } = require('express');
const { check } = require('express-validator');
const { register, getLoggedinUser, login } = require('./user.controller');
const auth = require('../../middlewares/auth');

const router = Router();

router.get('/', auth, getLoggedinUser);

router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have atleast 5 character').isLength({
      min: 5,
    }),
  ],
  register,
);

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have atleast 5 character').isLength({
      min: 5,
    }),
  ],
  login,
);

module.exports = router;
