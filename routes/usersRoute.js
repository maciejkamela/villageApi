/**
 * Created by camel on 2016-02-04.
 */
module.exports = function (app) {
    var users = require('./../apiMethods/usersMethods');
    app.get('/users/comments', users.getAllUsersComments);
    app.get('/users/articles', users.getAllUsersArticles);
    app.get('/users/:id', users.getSingleUser);
    app.get('/users', users.getAllUsers);
    //app.post('/users', users.addNewUser);
    //app.put('/users/:id', users.updateUser);
    //app.delete('/users/:id', users.deleteSingleUser);
    //app.get('/users/comments', users.getAllUsers);
};
