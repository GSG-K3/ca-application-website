const notFound = (err, req, res, next) => {
	res.status(404).json({ message: '404 PAGE NOT FOUND', err });
};

const serverErr = (err, req, res, next) => {
	res.status(500).json({ message: '500 SERVER ERROR', err });
};

module.exports = { notFound, serverErr };
