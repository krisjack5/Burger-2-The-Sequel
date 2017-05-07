var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3007,
    user: "root",
    password:"nadia726!",
    database: "burgers_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;