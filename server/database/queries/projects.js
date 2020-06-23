const db_connection = require('../connection');

let insertUserProjects = (user) => {
	const sql = {
		text:
			'Insert INTO account (user_id, project1_link, project2_link)  VALUES($1,$2,$3);',
		values: [user.userId, user.firstProject, user.secondProject],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserProjects;
