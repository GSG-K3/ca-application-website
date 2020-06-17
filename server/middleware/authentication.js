const { verify } = require('jsonwebtoken');
const { SECRET } = process.env;

exports.isAuthenticated = (req, res, next) => {
	if (req.cookies && req.cookies.token) {
		const { token } = req.cookies;
		return verify(token, SECRET, (err, result) => {
			console.log('    TOKEN VERIFY!!', result);
			if (err) {
				return res.status(401).clearCookie('token').json({
					status: 'error',
					message: 'unauthorised',
				});
			}

			next();
		});
	} else {
		return res
			.status(401)
			.json({ status: 'fail', message: 'please login to continue' });
	}
};
