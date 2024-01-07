const express = require('express');
const { jwtVerify } = require('../controllers/jwt.controller');
const userRoutes = require('./user.routes');
const accountRoutes = require('./account.routes');
const authRoutes = require('./auth.routes');
const chatRoutes = require('./chat.routes');
const messageRoutes = require('./message.routes');
const notificationRoutes = require('./notification.routes');

const router = express.Router();
const middlewareRouter = express.Router();

// Routes With JWT Verify
middlewareRouter.use(jwtVerify);
middlewareRouter.use('/user', userRoutes);
middlewareRouter.use('/accounts', accountRoutes);
middlewareRouter.use('/chat', chatRoutes);
middlewareRouter.use('/message', messageRoutes);
middlewareRouter.use('/notification', notificationRoutes);

// Auth Routes
router.use('/auth', authRoutes);
router.use('/admin/user', userRoutes);
router.use('/debug/chats', (req, res) => res.render('message'));

// Useless API
router.get('/', (req, res) => res.render('index'));
/* router.get('/', (req, res) => {
  res.send('<h1>Jangan otak atik API nya ya sayang, nanti zeta marah loh! >_<');
}); */

module.exports = [
  router,
  middlewareRouter,
];

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
