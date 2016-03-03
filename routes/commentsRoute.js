module.exports = function (app) {
    var comments = require('./../apiMethods/commentsMethods');

    //ToDo routing restowy musi miec albo articles albo pictures czyli /articles/:id/comments
    app.get('/comments', comments.getAllComments);
    app.get('/comments/:id', comments.getSingleComment) ;
    app.put('/articles/:articleId/comments/:id', comments.updateComment);
    app.delete('/articles/:articleId/comments/:id', comments.deleteSingleComment);
    app.post('/articles/:id/comments', comments.addNewCommentToArticle);
};
