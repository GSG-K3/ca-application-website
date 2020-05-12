const insertPersonalInfo = require('../database/queries/personalInfo');

const PersonalInfo = (request, response) => {
	const user = request.body;
	insertPersonalInfo(user)
		.then((result) => {
			if (result.rowCount !== 0) response.send('yes');
		})
		.catch((err) => console.log(err));
};

module.exports = PersonalInfo;
