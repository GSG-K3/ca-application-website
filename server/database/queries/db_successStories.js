const db_connection = require("../connection");
const sql = "SELECT * FROM stories;";
console.log("Outside-query");

const getStoriesQuery = () => {
  console.log("inside Querry");

  return db_connection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => console.log("an error occured at query"));
};

module.exports = { getStoriesQuery };
