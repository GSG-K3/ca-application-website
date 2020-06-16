const getUserAccounts = require('../database/queries/profile');

const profileInfo = (request, response) => {
	const { userId } = request.body;
	getUserAccounts(userId)
		.then((result) => {
			if (result.rowCount !== 0) {
				response.send(result.rows);
			}
		})
		.catch((err) => res.status(500).json({ error: err }));
};

module.exports = profileInfo;
