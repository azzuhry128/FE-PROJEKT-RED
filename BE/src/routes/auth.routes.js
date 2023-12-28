const express = require('express');
const { jwtVerify } = require('../controllers/jwt.controller');

const router = express.Router();
const {
  signIn,
  signUp,
  signOut,
} = require('../controllers/auth.controller');

router.post('/register', signUp);
router.post('/login', signIn);
router.post('/logout', jwtVerify, signOut);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
