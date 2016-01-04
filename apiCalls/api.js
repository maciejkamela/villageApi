/**
 * Created by camel on 2016-01-04.
 */
module.exports = function () {
    var mysql = require("mysql"),
        express = require("express");

    var pool = mysql.createPool({
        connectionLimit: 100,
        host: "localhost",
        user: "maciej",
        password: "abc123!",
        database: 'village',
        debug: false
    });
    return {
        getAllElements: function (param, req, res) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    connection.release();
                    res.json({"code": 100, "status": "Error in connection database"});
                    return;
                }
                console.log('Successfully connected to database');
                connection.query(param, function (err, rows) {
                    //console.log('Table output', rows);
                    connection.release();
                    if (!err) {
                        res.json(rows);
                    }
                });
                connection.on('error', function (err) {
                    res.json({"code": 100, "status": "Error in connection database."});
                    return;
                });
            });
        },
        getSingleElement: function (param, req, res) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    connection.release();
                    res.json({"code": 100, "status": "Error in connection database"});
                    return;
                }
                var id = req.params.id;
                console.log('Successfully connected to database');
                console.log('parametry', req.params);
                connection.query(param, [id], function (err, rows) {
                    //console.log('Table output', rows);
                    connection.release();
                    if (!err) {
                        res.json(rows);
                    }
                });
                connection.on('error', function (err) {
                    res.json({"code": 100, "status": "Error in connection database."});
                    return;
                });
            });
        }
    }
}();
