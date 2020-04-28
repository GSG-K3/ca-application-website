const express = require('express');

const router = express.Router();

console.log('index router from controller');

router.get('/api/personal-data', (request, response, next) => {
	response.send('response from router get');
	console.log('hii');
});

router.get('/api/projects', (request, response, next) => {
	response.send('rand');
	console.log('hello');
});

module.exports = router;
