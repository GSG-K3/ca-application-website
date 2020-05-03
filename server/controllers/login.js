const express = require('express');
const getUserByEmail = require('../database/queries/db_user');
const loginValidation = require('../helper/loginValidation');
const { compareHashed } = require('../helper');

const router = express.Router();
router.get('/', (request, response) => {
	response.send('response from router get');
});

router.post('/api/login', (request, response) => {
	let { user } = request.body;
	const { error } = loginValidation(user);
	if (typeof error !== 'undefined') {
		return response.send(error.toString().replace('validationError:', ''));
	}
	getUserByEmail(user)
		.then((result) => {
			if (result.rowCount === 0)
				return response.send('no user exist in the db');
			let data = result.rows[0];
			if (data !== null) {
				compareHashed(user.password, data.password)
					.then((result) => {
						if (!result) {
							response.send('no user exist in the db');
						}
						let info = {
							user_id: data.user_id,
							name: data.name,
							email: data.email,
						};
						response.send(info);
					})
					.catch((err) => {
						throw new Error(err);
					});
			}
		})
		.catch((err) => {
			throw new Error(err);
		});
});

module.exports = router;
