const  getStoriesQuery  = require("../database/queries/db_successStories");

const getStories = (req, res) => {
  getStoriesQuery()
    .then((result) => res.json(result))
    .catch((error) => {throw new Error(error)});
};

module.exports = getStories;
