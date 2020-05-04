const db_connection = require('../connection');
const bcrypt = require('bcrypt');
sql = "SELECT * FROM users;"
console.log('outside Query')

const getUserQuery = () => {
  console.log('inside Query');
  
	return db_connection
		.query(sql)
		.then((res) => res.rows)
		.catch((error) => console.log('an error occured at query'));
};
const postUserQuery=(data, callback)=>{
bcrypt.hash(data.password,10)
.then(hashpassword =>{
  console.log(hashpassword)
  const sql={
    text:"INSERT INTO users(name, email, password) VALUES($1,$2,$3);",
    values: [data.name, data.email, data.password]
  };
  return db_connection
  .query(sql.text, sql.values)
  .then(res => {return callback(null, res)})
})
.catch(error=> console.log(error))
}

module.exports = {getUserQuery ,postUserQuery};
