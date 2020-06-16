const { verify } = require('jsonwebtoken');
const { SECRET } = process.env;

const isAuthenticated = (req, res, next) => {
	if (req.cookies) {
		let  {token } = req.cookies; // it has to be req.cookies not req.header.cookie
		console.log('token',token)
		verify(token, SECRET, (error, result) => {
			if (error) {
				return res.status(401).json({
					status: 'error',
					message: 'unauthorised',
				});
			}
			if (result) {
				res.status(200).json({
					message: ' auth successfully',

				});
				return next();
			} else {
				return res.json({
					message: 'Oops! something went wrong dude :/',
				});
			}
		});
	} else {
		return res.status(401).json({
			status: 'fail',
			message: 'please login to continue',
		});
	}
};
module.exports= isAuthenticated