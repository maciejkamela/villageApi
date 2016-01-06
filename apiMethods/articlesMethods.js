/**
 * Created by camel on 2016-01-06.
 */
module.exports = function () {
    var Sequelize = require("sequelize");
    var env = process.env.NODE_ENV || "development";
    var config = require(__dirname + '/../config/config.json')[env];
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
    var articles = require('./../models/articles');

    return {
        getSingleArticle: function (req, res) {
            sequelize
                .query('Select * from artykuly where id = ?',
                    {replacements: [req.params.id], type: sequelize.QueryTypes.SELECT}
                )
                .then(function (rows) {
                    res.json(rows);
                    //console.log(rows);
                });
        },
        getAllArticle: function (req, res) {
            sequelize
                .query('Select * from artykuly',
                    {type: sequelize.QueryTypes.SELECT}
                )
                .then(function (rows) {
                    res.json(rows);
                    //console.log(rows);
                });
        },
        getAuthorArticles: function (req, res) {
            console.log(req.params);
            sequelize
                .query('Select * from artykuly where autor = ?',
                    {replacements: [req.params.autor], type: sequelize.QueryTypes.SELECT}
                )
                .then(function (rows) {
                    res.json(rows);
                    //console.log(rows);
                });
        },
        addNewArticle: function (req, res) {
                var loc = articles.updateAttributes();
                loc.updateAttributes({
                    id: req.body.id,
                    autor: req.body.autor,
                    tytul: req.body.tytul,
                    zajawka: req.body.zajawka,
                    cd: req.body.cd,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt
                }).on('success', function(id){
                    debugger;
                    res.json({
                        success: true,
                        // locale: {
                        //  name: req.body.name,
                        // }
                    }, 200);
                }).on('failure', function(error){
                    debugger;
                    throw new Error(error);
                });
        }
    }
}();