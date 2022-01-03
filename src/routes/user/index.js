const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>User test route</h1>');
});

module.exports = router;
