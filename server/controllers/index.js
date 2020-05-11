const express = require('express');
const { postUser } = require('./users');
const router = express.Router();

router.post('/api/signUp', postUser);

module.exports = router;
