require('dotenv').config({});

const express = require('express');
const connectDB = require('./db/connectDB');
const mainRouter = require('./routes');

const app = express();

const mount = () => {
  try {
    connectDB();
    app.use('/api', mainRouter);
    const port = process.env.PORT;
    app.listen(port, () => console.log(`[server]: listening on ${port}`));
  } catch (err) {
    console.log('failed to connect to server', err);
  }
};

mount();
