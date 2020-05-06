const db_connection = require('../connection');

const getSupportTeam = () => {
	const sql = {
		text: 'SELECT * FROM mentors ;',
	};
	return db_connection.query(sql.text);
};

module.exports = getSupportTeam;
