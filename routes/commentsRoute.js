module.exports = function (app) {
    var comments = require('./../apiMethods/commentsMethods');

    //ToDo routing restowy musi miec albo articles albo pictures czyli /articles/:id/comments
    app.get('/comments', comments.getAllComments);
    app.get('/comments/:id', comments.getSingleComment) ;
    app.post('/comments', comments.addNewComment);
    app.put('/comments/:id', comments.updateComment);
    app.delete('/comments/:id', comments.deleteSingleComment);
};
