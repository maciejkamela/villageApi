var mysql = require("mysql");

// First you need to create a connection to the db
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "maciej",
    password: "abc123!",
    database: 'world'
});

pool.getConnection(function (err, connection) {
    var post = {id: 10, name: 'Ela', location: 'LLLLL'};
    var x = connection.query('select count(*) from employees where id = ' + post.id);
    if (x !== 0) {
        console.log('Row with given id is already in database.', x);
    } else {
        connection.query('Insert into employees Set ?', post, function (err, result) {
            if (err) {throw err;}
        });
    }
    connection.query('Select * from employees where id>=1', function (err, rows) {
        if (err) {throw err;}

        console.log('Data received from DB');
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].name);
        }
    });
    connection.release(function (err) {
        console.log('connection is terminated');
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
        // before sending a COM_QUIT packet to the MySQL server.
    });
});
