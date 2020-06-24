const e = require('express');

module.exports = (req, res) => {
	res.status(200).json({ message: 'checked auth successfully' });
};
