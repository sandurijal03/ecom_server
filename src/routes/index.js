const { Router } = require('express');
const productRouter = require('./product');
const userRouter = require('./user');

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

module.exports = router;
