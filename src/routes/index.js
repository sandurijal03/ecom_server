const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>');
});

module.exports = router;
