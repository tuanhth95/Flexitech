const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.get('/:userId', accountController.getAccountDetail);

module.exports = router;
