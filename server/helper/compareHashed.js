const bcrypt = require('bcrypt');

const compareHashed = (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};

module.exports = compareHashed;
