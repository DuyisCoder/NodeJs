const mysql = require('mysql2/promise'); // nhằm sử dụng callback function
require('dotenv').config()
// create the connection to database
// const connection = mysql.createConnection({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME,
//   });
const connection =  mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  });
module.exports=connection;