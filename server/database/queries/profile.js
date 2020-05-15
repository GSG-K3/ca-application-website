const db_connection = require('../connection');

const getUserAccounts = (userId) => {
	const sql = {
		text: 'SELECT * FROM account WHERE user_id=$1 ;',
		value: [`${userId}`],
	};
	return db_connection.query(sql.text, sql.value);
};

module.exports = getUserAccounts;
