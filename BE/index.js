/* eslint-disable no-unused-vars */
require('./config/database.json');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const host = process.env.HOST || 'localhost';
const app = express();
const port = process.env.PORT || 3000;
const mainRoutes = require('./src/routes/main.routes');

// morgan
app.use(morgan('dev'));

// parsing json
app.use(express.json());

// parsing urlencoded data
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors({
  origin: process.env.URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
}));

// Routes
app.use('/api', mainRoutes);
app.use((req, res) => {
  res.send('<h1>Resource Not Found</h1>');
});

const server = app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${host}:${port}/`);
});
