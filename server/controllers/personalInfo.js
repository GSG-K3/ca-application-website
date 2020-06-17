const insertPersonalInfo = require('../database/queries/personalInfo');
const { serverErr } = require('./error');

const PersonalInfo = (request, response) => {
	const user = request.body;

	insertPersonalInfo(user)
		.then((result) => {
			if (result.rowCount !== 0) response.send('yes');
		})
		.catch((err) => serverErr(request, response));
};

module.exports = PersonalInfo;
