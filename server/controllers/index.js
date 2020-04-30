const express = require('express');
const router = express.Router();
const getStories= require('./SuccessStories') 


// router.get('/api/home/success-stories', (request, response)=> 
// response.send('response from router get'))

router.get('/api/home/success-stories',getStories )

module.exports= router;