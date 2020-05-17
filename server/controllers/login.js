const getUserByEmail = require('../database/queries/db_user');
const { compareHashed, loginValidation } = require('../helper');
const { sign } = require('jsonwebtoken');
const { SECRET } = process.env;

const Login = (request, response) => {
	let { user } = request.body;
	const { email, password } = user;
	const { error } = loginValidation(user);
	if (typeof error !== 'undefined') {
		return response.send(error.toString().replace('validationError:', ''));
	}
	getUserByEmail(email, (error, result) => {
		console.log('QUERY RESULT!', result);
		if (result.rowCount === 0) return response.send('no user exist in the db');
		const data = result.rows[0];
		if (data !== null) {
			compareHashed(password, data.password)
				.then((result) => {
					console.log('PASSWORD RESULT!', result);
					if (result) {
						const token = sign({ email }, SECRET);
						let info = {
							user_id: data.user_id,
							name: data.name,
							email: data.email,
						};
						response
							.status(200)
							.cookie('token', token, { maxAge: 900000, httpOnly: true })
							.json({ info, token });
					} else {
						response.status(400).json({ message: 'incorrect password' });
					}
				})
				.catch((err) => {
					response.status(500);
				});
		}
	});
};

module.exports = Login;
