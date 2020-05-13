const db_connection = require('../connection');

const getUserByEmail = (email, cb) => {
	const sql = {
		text: 'Select * From users Where email =$1;',
		values: [email],
	};
	return db_connection.query(sql.text, sql.values, (err, res) => {
		if (err) {
			cb(err);
		} else {
			cb(null, res);
		}
	});
};

module.exports = getUserByEmail;
