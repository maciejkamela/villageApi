/**
 * Created by camel on 2016-01-06.
 */
"use strict";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

//lamerska baza, ale zeby w kodzie nie uzywac polskich nazw zrobmy to
var plToEng = {
  'artykuly': 'articles'
};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file))
    db[plToEng[model.name] || model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;