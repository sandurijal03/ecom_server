const express = require('express');
const router = require('./routes');

const app = express();

app.use(router);

const port = process.env.PORT || 8848;

app.listen(port, () => console.log(`[server]: listening on ${port}`));
