const insertUserData = require('../database/queries/accounts');

const Accounts = (req, res) => {
	console.log(req.body);
	const user = req.body;
	const {
		Gethub,
		freecodecamp,
		codewars,
		Submitted1,
		Submitted2,
		Submitted3,
	} = user;
	console.log(Gethub, freecodecamp, codewars);
	if (Gethub !== '' && freecodecamp !== '' && codewars !== '') {
		insertUserData(user)
			.then((result) => {
				if (result.rowCount === 1) {
					res.send(true);
				}
			})
			.catch((err) => console.log(err));
	} else if (Gethub !== '' && freecodecamp === '' && codewars === '') {
		insertUserData(user)
			.then((result) => {
				if (result.rowCount === 1) {
					submitted1 = true;
					submitted2 = false;
					submitted3 = false;
					res.send(submitted1, submitted2, submitted3);
				}
			})
			.catch((err) => console.log(err));
	}
};

module.exports = Accounts;
