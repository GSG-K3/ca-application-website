const getUserAccounts = require('../database/queries/profile');

const { serverErr } = require('./error');

const profileInfo = (request, response) => {
	const { userId } = request.params;

	getUserAccounts(userId)
		.then((result) => {
			if (result.rowCount !== 0) {
				response.send(result.rows);
			} else response.send('there is no data');
		})
		.catch((err) => serverErr(err, request, response));
};

module.exports = profileInfo;
