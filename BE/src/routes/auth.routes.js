const express = require('express');
const { jwtVerify } = require('../controllers/jwt.controller');

const router = express.Router();
const {
  signIn,
  signUp,
  signOut,
} = require('../controllers/auth.controller');

const {
  getRegisterMail,
  getTokenForgetPassword,
  getTokenChangeEmail,
} = require('../controllers/mail.controller');

router.post('/register', signUp);
router.post('/login', signIn);
router.post('/logout', jwtVerify, signOut);

// Mail
router.post('/register/mail/get-otp', getRegisterMail);
router.post('/forget-password/get-otp', getTokenForgetPassword);
router.post('/email/change/get-otp', getTokenChangeEmail);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
