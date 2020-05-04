const Joi = require('@hapi/joi');
const { getUserQuery, postUserQuery } = require('../database/queries/db_users');
console.log('Outside-controller');

const getUser = (req, res) => {
	console.log('inside controller');

	getUserQuery()
		.then((result) => res.json(result))
		.catch((error) => {
			throw new Error(error,"an error at getUserQuery fn occur");
		});
};

const postUser = (req, res) => {
	console.log('inside post controller');
	const data = req.body;
	console.log(data);
	const { error } = signUpValidation(data);
	if (error) {
		return res.status(400).json({ message: error.toString() });
	}
	postUserQuery(data, (error, result) => {
		if (error) return res.status(400).json({ message: 'An error occur' });
		return res.status(200).json({ message: 'Thanks for registration' });
	});
};

const signUpValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().alphanum().min(3).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string()
			.min(8)
			.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')),
	});
	return schema.validate(data);
};
module.exports = { getUser, postUser, signUpValidation };
