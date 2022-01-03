require('dotenv').config();

const express = require('express');
const connectDB = require('./db/connectDB');
const router = require('./routes');

const app = express();

app.use(router);

connectDB();

const port = process.env.PORT;

app.listen(port, () => console.log(`[server]: listening on ${port}`));
