const db_connection = require("../connection");
const sql = "SELECT * FROM stories;";

const getStoriesQuery = () => {
  return db_connection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => console.log("an error occured at query"));
};

module.exports =  getStoriesQuery ;
