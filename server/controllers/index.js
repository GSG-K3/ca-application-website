const router = require('express').Router();

const getStories= require('./SuccessStories') 

router.get('/api/success-stories',getStories )


module.exports= router;
