const express = require('express');

const router = express.Router();
router.get('/', (request, response) => {
	response.send('response from router get');
});

module.exports = router;
