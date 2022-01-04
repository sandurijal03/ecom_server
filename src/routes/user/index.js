const { Router } = require('express');
const { check } = require('express-validator');
const { register, getLoggedinUser } = require('./user.controller');
const auth = require('../../middlewares/auth');

const router = Router();

router.get('/', auth, getLoggedinUser);

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
