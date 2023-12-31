/* eslint-disable no-unused-vars */
require('./config/database.json');
const path = require('path');
const ejs = require('ejs');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Server } = require('socket.io');

require('dotenv').config();

const host = process.env.HOST || 'localhost';
const app = express();
const port = process.env.PORT || 3000;
const mainRoutes = require('./src/routes/main.routes');
const { socketController } = require('./src/controllers/socketIo.controller');

app.set('view engine', 'ejs');
app.use(express.static(path.join(process.cwd(), 'src/views')));

// cors
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With, Accept',
}));

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
app.set('views', path.join(__dirname, 'src/views'));
app.use('/api', express.static(path.join(process.cwd(), 'src/views')));
app.use('/api', mainRoutes);
app.use((req, res) => {
  res.send('<h1>Resource Not Found</h1>');
});

const server = app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${host}:${port}/`);
});

// Socket IO

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
  },
  connectionStateRecovery: {},
});

io.on('connection', socketController);
