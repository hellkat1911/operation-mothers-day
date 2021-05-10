const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config({ path: 'api.env' });

const corsOptions = {
  origin: process.env.APP,
};
app.use(cors(corsOptions));

// parse body of requests - v4.16+
app.use(express.json());
// parse URL-encoded bodies - v4.16+
app.use(express.urlencoded({ extended: true }));
// all routes prefixed with /api
app.use('/api', routes);
// general error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Server failed to process request');
});

app.listen(process.env.NODE_PORT, () =>
  console.log(`Express running at :${process.env.NODE_PORT}...`)
);
