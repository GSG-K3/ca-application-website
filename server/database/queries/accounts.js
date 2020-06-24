const db_connection = require('../connection');

let insertUserAccounts = (user) => {
	const sql = {
		text:
			'Insert INTO account (user_id,github_link, freecodecamp_link, codewars_link)  VALUES($1,$2,$3,$4);',
		values: [user.userId, user.github, user.freecodecamp, user.codewars],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserAccounts;
