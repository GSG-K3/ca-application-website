const getUserByEmail = require('../database/queries/db_user');
const { compareHashed, loginValidation } = require('../helper');
let jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const Login = (request, response) => {
	console.log('wekiiii')
	console.log(request);
	let { user } = request.body;
	let { email, password } = user;
	console.log(email, password);
	const { error } = loginValidation(user);

	if (typeof error !== 'undefined') {
		return response.send(error.toString().replace('validationError:', ''));
	}

	getUserByEmail(user)
		.then((result) => {
			if (result.rowCount === 0)
				return response.send('no user exist in the db');
			let data = result.rows[0];
			console.log('Data:', data);
			console.log('secret', SECRET);
			if (data !== null) {
				compareHashed(password, data.password).then((result) => {
					console.log('password result:', result);
					if (result) {
						const token = jwt.sign({ email }, SECRET);
						console.log('token', token);
						let info = {
							user_id: data.user_id,
							name: data.name,
							email: data.email,
						};
						return response
							.cookie('token', token, { maxAge: 99999999 })
							.json({ massege: 'successfully logged', token });
					} else {
						return response.json({ massege: 'bad request' });
					}
				});
			}
		})
		.catch((err) => {
			throw new Error(err);
		});
};

module.exports = Login;
