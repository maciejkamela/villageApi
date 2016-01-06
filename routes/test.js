/**
 * Created by camel on 2016-01-06.
 */
module.exports = function (app) {
    var articles = require('./../apiMethods/articlesMethods');
    app.get('/author/:autor', articles.getAuthorArticles);
};
