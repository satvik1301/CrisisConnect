const sql = require('mssql')

const config = {
    user: "CCONNECTDEV",
    password: "1234",
    server: "localhost",
    database: "CrisisConnect",
    port: 1433,
    options: {
        trustServerCertificate: true
      }

}

module.exports = config;

