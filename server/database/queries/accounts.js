const db_connection = require('../connection');

let insertUserData = (user) => {
	const { Gethub, freecodecamp, codewars } = user;

	const sql = {
		text:
			'Insert INTO account(user_id,github_link, freecodecamp_link, codewars_link, freecodecamp_scores, project1_link, project2_link,codewars_level)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8);',
		values: [
			1,
			Gethub,
			freecodecamp,
			codewars,
			2,
			'project',
			'projectlink',
			'level',
		],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserData;
