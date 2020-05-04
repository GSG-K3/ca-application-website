const express = require('express');
const { postUser, getUser } = require('./users');
const router = express.Router();

router.get('/signUp', getUser);
router.post('/api/signUp', postUser);

module.exports = router;
