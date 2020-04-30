const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
console.log('****connection occured at connection.js')
if (!connectionString) 
console.log('connectionString: ',connectionString);

module.exports = new Pool({
	connectionString,
	ssl: !connectionString.includes('locahost'),
});
