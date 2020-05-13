const bycrpt = require('bcryptjs');
('use strict');

const hashPassword = () => {
	return bycrpt.hash('password123', 10);
};

hashPassword().then((result) => console.log(result));
module.export = hashPassword;
