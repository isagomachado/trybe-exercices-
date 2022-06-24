const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'igm@1996',
	database: 'model_exemple' });

module.exports = connection;