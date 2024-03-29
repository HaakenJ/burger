require("dotenv").config();
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "burgers_db"
    });
}

connection.connect(err => {
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;