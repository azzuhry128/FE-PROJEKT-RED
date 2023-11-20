const express = require('express');

const router = express.Router();
const {
  signIn,
} = require('../controllers/auth.controller');

router.post('/login', signIn);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
