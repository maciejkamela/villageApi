var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "maciej",
    password: "abc123!",
    database: 'world'
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.query('Select * from city where name="Belfast"', function (err, rows) {
   if(err) throw err;

    console.log('Data received from DB');
    for(var i = 0; i < rows.length; i++) {
    console.log(rows[i].RowDataPacket.name)
    }
});
con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});