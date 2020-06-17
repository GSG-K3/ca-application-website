const notFound = (req, res, err) => {
	res.status(404).json({ message: '404 PAGE NOT FOUND', err: err });
};

const serverErr = (req, res, err) => {
	res.status(500).json({ message: '500 SERVER ERROR', err: err });
};

module.exports = { notFound, serverErr };
