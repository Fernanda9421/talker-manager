const express = require('express');

const router = express.Router();

const login = require('../middlewares/login');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

router.post('/', validateEmail, validatePassword, login);

module.exports = router;
