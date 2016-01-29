/**
 * Created by camel on 2016-01-29.
 */
module.exports = function (app) {
    var articles = require('./../apiMethods/articlesMethods');
    app.get('/articles', articles.getAllArticles);
    app.get('/articles/comments', articles.getAllArticles);
};
