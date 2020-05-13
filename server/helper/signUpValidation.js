const Joi = require('@hapi/joi');

const signUpValidation = (userData) => {
	const schema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string()
			.min(8)
			.required()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
	});
	return schema.validate(userData);
};

module.exports = signUpValidation;
