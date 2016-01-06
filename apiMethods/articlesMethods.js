/**
 * Created by camel on 2016-01-06.
 */
module.exports = function () {
    var Sequelize = require("sequelize");
    var env = process.env.NODE_ENV || "development";
    var config = require(__dirname + '/../config/config.json')[env];
    var sequelize = new Sequelize(config.database, config.username, config.password, config);

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
        }
    }
}();