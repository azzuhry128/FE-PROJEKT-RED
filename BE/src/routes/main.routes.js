const express = require('express');
const userRoutes = require('./user.routes');
const accountRoutes = require('./account.routes');
const authRoutes = require('./auth.routes');
const { jwtVerify } = require('../controllers/jwt.controller');

const router = express.Router();
const middlewareRouter = express.Router();

middlewareRouter.use(jwtVerify);
middlewareRouter.use('/user', userRoutes);
middlewareRouter.use('/accounts', accountRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => { res.send('<h1>THIS IS API BLYAT!!!!</h1>'); });

module.exports = [
  router,
  middlewareRouter,
];

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
