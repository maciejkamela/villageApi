/**
 * Created by camel on 2016-01-06.
 */

module.exports = function (app) {
    var articles = require('./../apiMethods/articlesMethods');
    app.get('/articles/comments', articles.getAllCommentedArticles);//to musi byc pierwszy API call, inaczej nie dziala ??
    app.get('/articles/:id', articles.getSingleArticle);
    app.get('/articles', articles.getAllArticles);
    app.post('/articles', articles.addNewArticle);
    app.put('/articles/:id', articles.updateArticle);
    app.delete('/articles/:id', articles.deleteSingleArticle);
};
