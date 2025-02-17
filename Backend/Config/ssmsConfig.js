const sql = require('mssql')

const config = {
    user: "CCONNECTDEV",
    password: "P@ssW0rd!",
    server: "localhost",
    database: "CrisisConnect",
    port: 1433,
    options: {
        trustServerCertificate: true
      }

}

module.exports = config;
