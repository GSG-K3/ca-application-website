const db_connection = require('../connection');

let insertUserProjects = (user) => {
	const sql = {
		text:
			'Update account SET user_id=$1, project1_link =$2, project2_link = $3 Where user_id=$1',
		values: [user.userId, user.firstProject, user.secondProject],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserProjects;
