const getUserByEmail = require("../database/queries/db_user");
const { compareHashed, loginValidation } = require("../helper");
const { sign } = require("jsonwebtoken");
const { SECRET } = process.env;

const Login = (request, response) => {
  let { user } = request.body;
  let { email, password } = user;
  const { error } = loginValidation(user);
  if (typeof error !== "undefined") {
    return response.send(error.toString().replace("validationError:", ""));
  }

  getUserByEmail(user)
    .then((result) => {
      if (result.rowCount === 0)
        return response.send("no user exist in the db");
      let data = result.rows[0];
      if (data !== null) {
        compareHashed(password, data.password).then((result) => {
          if (result) {
            const { user_id } = data;
            const token = sign({ email, user_id }, SECRET, { expiresIn: "1d" });
            return response
              .status(200)
              .cookie("token", token)
              .json({ massege: "successfully logged", token });
          }
          return response.json({ massege: "bad request" });
        });
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = Login;
