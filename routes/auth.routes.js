const express = require('express');
const { signup, login_email, login_google, login_admin } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signup', signup);
router.post('/login-email', login_email);
router.post('/login-google', login_google);
router.post('/login-admin', login_admin);

module.exports = router;