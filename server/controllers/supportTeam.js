const { join } = require('path');
const getSupportTeam = require('../database/queries/supportTeam');

const SupportTeam = (request, response) => {
	getSupportTeam()
		.then((result) => {
			if (result.rows === []) {
				return response.send('<h1>empty data</h1>');
			}
			response.send(result.rows);
		})
		.catch((err) => console.log('error from getting the database', err));
};

module.exports = SupportTeam;
