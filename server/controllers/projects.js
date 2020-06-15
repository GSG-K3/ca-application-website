const insertUserProjects = require('../database/queries/projects');

const Projects = (req, res) => {
	const user = req.body;
	console.log(user);

	if (user.firstProject !== '' && user.secondProject !== '') {
		insertUserProjects(user)
			.then((result) => {
				if (result.rowCount === 1) {
					res.send(true);
				}
			})
			.catch((err) => console.log(err));
	} else res.send(false);
};

module.exports = Projects;
