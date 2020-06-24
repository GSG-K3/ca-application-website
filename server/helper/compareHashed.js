const bcrypt = require('bcryptjs');

const compareHashed = (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};

module.exports = compareHashed;
