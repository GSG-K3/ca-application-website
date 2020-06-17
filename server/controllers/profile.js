const getUserAccounts = require('../database/queries/profile');

const { serverErr } = require('./error');

const profileInfo = (request, response) => {
	const { userId } = request.params;

	getUserAccounts(userId)
		.then((result) => {
			if (result.rowCount !== 0) {
				response.send(result.rows);
			}
		})
		.catch((err) => serverErr(request, response, err));
};

module.exports = profileInfo;
