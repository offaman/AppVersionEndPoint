const mssql = require('mssql')
require('dotenv').config()

async function createConnection(){
  sqlConfig = {
    user: process.env.DATABASEUSER,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASENAME,
    server: "DELL-MICRO-PC\\SQLEXPRESS",
    port: 51773,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000,
    },
    options: {
        trustServerCertificate: true, 
    },
  };
  let connectionPool = await mssql.connect(sqlConfig);
  return connectionPool; 
}


module.exports = {createConnection}