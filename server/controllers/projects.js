const insertUserProjects = require('../database/queries/projects');
const { serverErr } = require('./error');

const Projects = (req, res) => {
	const user = req.body;
	if (user.firstProject !== '' && user.secondProject !== '') {
		insertUserProjects(user)
			.then((result) => {
				if (result.rowCount === 1) {
					res.send(true);
				}
			})
			.catch((err) => serverErr(req, res, err));
	} else res.send(false);
};

module.exports = Projects;
