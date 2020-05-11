const db_connection = require('../connection');

let insertUserAccounts = (user) => {
	const sql = {
		text:
			'Insert INTO account (user_id,github_link, freecodecamp_link, codewars_link, freecodecamp_scores, project1_link, project2_link,codewars_level)  VALUES($1,$2,$3,$4,$5,$6,$7,$8);',
		values: [1, user.github, user.freecodecamp, user.codewars, '', '', '', ''],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserAccounts;
