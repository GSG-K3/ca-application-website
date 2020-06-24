const { verify } = require('jsonwebtoken');
const { SECRET } = process.env;

module.exports = (req, res, next) => {
	if (req.cookies && req.cookies.token) {
		let { token } = req.cookies;
		verify(token, SECRET, (error, result) => {
			if (error) {
				return res.status(401).clearCookie('token').json({
					status: 'error',
					message: 'unauthorised',
				});
			}
			return next();
		});
	} else
		return res
			.status(401)
			.json({ status: 'fail', message: 'please login to continue' });
};
