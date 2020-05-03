const express = require('express');
const router = express.Router();
const getStories= require('./SuccessStories') 

router.get('/api/success-stories',getStories )

module.exports= router;
