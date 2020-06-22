const { Pool } = require("pg");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) console.log("connectionString: ", connectionString);

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost"),
  rejectUnauthorized: true,
});
