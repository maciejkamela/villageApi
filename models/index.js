/**
 * Created by camel on 2016-01-06.
 */
"use strict";
var fs = require("fs"),
    path = require("path"),
    Sequelize = require("sequelize"),
    env = process.env.NODE_ENV || "development",
    config = require(__dirname + '/../config/config.json')[env],
    sequelize = new Sequelize(config.database, config.username, config.password, config,
        {
            dialect: 'mysql',
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            }
        }),
    db = {};
fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function (file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;