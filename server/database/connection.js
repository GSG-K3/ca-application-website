const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
console.log('inside connection')
if (!connectionString) throw new Error('failed to connect with the database');
console.log(connectionString)

module.exports = new Pool({
	connectionString,
	ssl: !connectionString.includes('localhost'),
});
