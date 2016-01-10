/**
 * Created by camel on 2016-01-06.
 */

module.exports = function (app) {
    var articles = require('./../apiMethods/articlesMethods');
    app.get('/articles/:id', articles.getSingleArticle);
    app.get('/articles', articles.getAllArticle);
    app.post('/articles', articles.addNewArticle);
    app.put('/articles/:id', articles.updateArticle);
    app.get('/articles/offset/:start/count/:amount/sort/:orderType', articles.getLimitedArticle);

};
