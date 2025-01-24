const mysql = require("mysql2");
const db = mysql.createPool({
    contentionLimit: 5,
    host: "localhost",
    user: "root",
    database: "justice_db",
    password: "Admin123"
}).promise();

module.exports = db;
