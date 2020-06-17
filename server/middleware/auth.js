const { verify } = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    let { token } = req.cookies;
    verify(token, SECRET, (error, result) => {
      if (result) {
        req.user_id = result.user_id;
        return res.status(200).json({ message: "Authorized" });
      }
      if (error) return res.status(401).json({ message: "unauthorized" });
      return next();
    });
  } return res
    .status(401)
    .json({message: "please login to continue.." });
};
