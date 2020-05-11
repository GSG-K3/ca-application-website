const db_connection = require("../connection");
const bcrypt = require("bcryptjs");
sql = "SELECT * FROM users;";

const postUserQuery = (data, callback) => {
  bcrypt
    .hash(data.password, 10)
    .then((hashpassword) => {
      const sql = {
        text: "INSERT INTO users(email, password) VALUES($1,$2)",
        values: [data.email, hashpassword],
      };
      return db_connection.query(sql.text, sql.values).then((res) => {
        return callback(null, res);
      });
    })
    .catch((error) => {
      return callback(error);
    });
};

module.exports =  postUserQuery ;
