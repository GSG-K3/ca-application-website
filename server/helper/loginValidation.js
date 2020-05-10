const Joi = require('@hapi/joi');

const loginObj = {
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.required(),
	password: Joi.string().min(7).pattern(new RegExp('^[a-zA-Z0-9]')).required(),
};

const loginSchema = Joi.object(loginObj);

const loginValidation = (data) => {
	return loginSchema.validate(data);
};

module.exports = loginValidation;
