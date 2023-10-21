const express = require('express');
const userRoutes = require('./user.routes');
const accountRoutes = require('./account.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/accounts', accountRoutes);

router.get('/', (req, res) => { res.send('<h1>THIS IS API BLYAT!!!!</h1>'); });

module.exports = router;
