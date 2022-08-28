const mysql = require('mysql2');
const cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root.8",
    database: "dbaduanas"
    // here you can set connection limits and so on
});

module.exports = cnx;