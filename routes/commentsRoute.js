module.exports = function (app) {
    var comments = require('./../apiMethods/commentsMethods');
    app.get('/comments', comments.getAllComments);
    app.get('/comments/:id', comments.getSingleComment) ;
    app.post('/comments', comments.addNewComment);
    app.put('/comments/:id', comments.updateComment);
    app.delete('/comments/:id', comments.deleteSingleComment);
};
