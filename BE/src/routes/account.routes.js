const express = require('express');

const router = express.Router();
const {
  fetchAllAccount,
  fetchAccountByUsername,
  createAccount,
  editAccount,
  deleteAccount,
} = require('../controllers/account.controller');

router.get('/', fetchAllAccount);
// router.get('/:accountId', fetchAccountByAccountId);
router.get('/username/:username', fetchAccountByUsername);
router.post('/', createAccount);
router.put('/:accountId', editAccount);
router.delete('/:accountId', deleteAccount);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
