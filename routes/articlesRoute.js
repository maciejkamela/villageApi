/**
 * Created by camel on 2016-01-06.
 */
//Jak to zrobić żeby call byl tu a nie w app.js??

    module.exports = function (app) {
        var articles = require('./apiMethods/articlesMethods');
        app.get('/articles/:id', articles.getSingleArticle);
        app.get('/articles/', articles.getAllArticle);
    };
