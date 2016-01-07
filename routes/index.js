///**
// * Created by camel on 2016-01-06.
// */
//var models = require('./../models');
//var sequelize = require("sequelize");
//
////exports.getArticles = function(req, res) {
////    models.Articles.findAll().then(function(Articles){
////        //console.log(Articles);
////        res.json(Articles);
////    });
////
//////console.log(models);
////};
//
//
//exports.getArticles = function (req, res) {
//    sequelize.query('Select * from artykuly').success;
//};

// Jak to zrobic zeby np. tu umieszczac wszystkie pliki z katalogu routes, tak zebym nie musial
//w app.j podawac require do kazdego z tych plikow , bo bedzie ich tu wiecej ??? Potrzebne to mi do dokumentacji API

module.exports = {
    articles:require('./articlesRoute')
}
