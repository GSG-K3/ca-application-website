const db_connection = require('../connection');

let insertUserAccounts = (user) => {
	const sql = {
		text:
			'Insert INTO personal_info (user_id,first_name,last_name,phone,email_info,motivation,age_info,gender_info,westbank_cities,gaza_cities)  VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);',
		values: [
			1,
			user.firstName,
			user.lastName,
			user.phone,
			user.email,
			user.motivation,
			user.age,
			user.gender,
			user.westBankCity,
			user.GazaCity,
		],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertUserAccounts;
