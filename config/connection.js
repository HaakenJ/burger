const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "kramer",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;