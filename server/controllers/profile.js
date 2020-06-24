const getUserAccounts = require('../database/queries/profile');

const { serverErr } = require('./error');

const profileInfo = (request, response) => {
	const { userId } = request.params;
	console.log('controller', userId);

	getUserAccounts(userId)
		.then((result) => {
			console.log(result);
			if (result.rowCount !== 0) {
				console.log('data from the query', result.rows);
				response.send(result.rows, { user_id: userId });
			} else response.send('there is no data');
		})
		.catch((err) => serverErr(err, request, response));
};

module.exports = profileInfo;
