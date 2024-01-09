const express = require('express');

const router = express.Router();
const {
  fetchAllAccount,
  fetchAccountByAccountId,
  fetchAccountByUsername,
  createAccount,
  editAccount,
  deleteAccount,
  resetPassword,
  changeEmail,
} = require('../controllers/account.controller');

router.get('/', fetchAllAccount);
router.get('/account/:accountId', fetchAccountByAccountId);
router.get('/my-account', fetchAccountByAccountId);
router.get('/username/:username', fetchAccountByUsername);
router.post('/', createAccount);
router.put('/:accountId', editAccount);
router.delete('/:accountId', deleteAccount);

// miscellanous
router.put(':accountId/password/reset', resetPassword);
router.put(':accountId/email/change', changeEmail);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
