const express = require('express');

const router = express.Router();
console.log('index router from controller');
router.get('/', (request, response) => {
	response.send('response from router get');
});

module.exports = router;
