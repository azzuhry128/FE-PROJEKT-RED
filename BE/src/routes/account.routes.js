const express = require('express');

const router = express.Router();
const {
  fetchAllAccount, fetchAccountByUsername, createAccount, editAccount, deleteAccount,
} = require('../controllers/account.controller');

router.get('/', fetchAllAccount);
router.get('/:username', fetchAccountByUsername);
router.post('/', createAccount);
router.put('/:username', editAccount);
router.delete('/:username', deleteAccount);

module.exports = router;
