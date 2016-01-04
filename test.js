var mysql = require("mysql"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

// First you need to create a connection to the db
var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "maciej",
    password: "abc123!",
    database: 'world',
    debug : false
});

function getAllEmployees(req,res) {
    console.log('response', res);

    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from employees",function(err,rows){
            console.log('Table output', rows);
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database."});
            return;
        });
    });
}

app.get("/employees",function(req,res){
    console.log('url', req.url);
    console.log('method', req.method);
    console.log('route', req.route);
    console.log('password', req.body);
    getAllEmployees(req,res);
});
app.listen(port);