const { getStoriesQuery } = require("../database/queries/db_successStories");
console.log("Outside-controller");

const getStories = (req, res) => {
  console.log("inside controller");

  getStoriesQuery()
    .then((result) => res.json(result))
    .catch((error) => {throw new Error(error)});
};

module.exports = getStories;
