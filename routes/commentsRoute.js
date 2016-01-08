module.exports = function (app) {
    var comments = require('./../apiMethods/commentsMethods');
    app.get('/comments/:id', comments.getSingleComment) ;
    app.get('/comments', comments.getAllComments);
};
