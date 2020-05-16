const insertUserAccounts = require('../database/queries/accounts');

const Accounts = (req, res) => {
	const user = req.body;

	if (user.github !== '' && user.freecodecamp !== '' && user.codewars !== '') {
		insertUserAccounts(user)
			.then((result) => {
				if (result.rowCount === 1) {
					res.send(true);
				}
			})
			.catch((err) => console.log(err));
	} else res.send(false);
};

module.exports = Accounts;
