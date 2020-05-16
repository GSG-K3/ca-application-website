const bycrpt = require('bcryptjs');

const hashPassword = () => {
	return bycrpt.hash('password123', 10);
};

// hashPassword().then((result) => console.log(result));
module.export = hashPassword;
