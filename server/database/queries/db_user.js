const db_connection = require('../connection');

let getUserByEmail = (user) => {
	const { email } = user;
	const sql = {
		text: 'Select * From users Where email =$1;',
		values: [email],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = getUserByEmail;
