const path = require('path');

const fs = require('fs');

const connection = require('./connection');

const dbsql = fs
	.readFileSync(path.join(__dirname, 'sql', 'fake_data.sql'))
	.toString();

connection
	.query(dbsql)
	.then((data) => console.log(' the dummy data has been inserted'))
	.catch((err) => console.log(err));
