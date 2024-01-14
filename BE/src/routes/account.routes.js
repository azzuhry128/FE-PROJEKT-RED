const express = require('express');

const router = express.Router();
const {
  fetchAllAccount,
  fetchAccountByAccountId,
  fetchAccountByUsername,
  createAccount,
  editAccount,
  deleteAccount,
} = require('../controllers/account.controller');

router.get('/', fetchAllAccount);
router.get('/account/:accountId', fetchAccountByAccountId);
router.get('/my-account', fetchAccountByAccountId);
router.post('/username/find', fetchAccountByUsername);
router.post('/', createAccount);
router.put('/:accountId', editAccount);
router.delete('/:accountId', deleteAccount);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
