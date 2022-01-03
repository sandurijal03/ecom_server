const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

const port = process.env.PORT || 8848;

app.listen(port, () => console.log(`[server]: listening on ${port}`));
