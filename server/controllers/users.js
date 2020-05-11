const postUserQuery = require('../database/queries/db_postUser');
const signUpValidation = require('../helper/signUpValidation');

const SignUp = (req, res) => {
	const userData = req.body.user;
	const { error } = signUpValidation(userData);

	if (!error) {
		postUserQuery(userData, (error, result) => {
			if (error) {
				return res.status(200).json({
					message: 'Email is already exists',
				});
			}
			return res.status(200).json({
				message: 'Successfully registered',
			});
		});
	} else {
		if (error.message.includes('[ref:password]'))
			return res.status(200).json({
				message: 'passwords do not match',
			});
		else if (error.message.includes('length must be'))
			return res.status(200).json({
				message: 'passwords length must be at least 8 characters long',
			});
		else if (error.message.includes('required pattern'))
			return res.status(200).json({
				message:
					'fails to match the required pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/',
			});
	}
};

module.exports = SignUp;
