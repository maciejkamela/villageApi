/**
 * Created by camel on 2016-02-05.
 */
var models = require('../models'),
    MyModel = require('../supportMethods/modelMethods'),
    supportModel = new MyModel(models.users);

module.exports = (function () {
    return {
        getSingleUser: function (req, res) {
            supportModel.getSingleRecord(req.params.id)
                .then(function (user) {
                    if (!user) {
                        res.send({
                            status: 'error',
                            error: '404 - Not found.'
                        });
                    }
                    else {
                        res.json(user);
                    }
                });
        },
        getAllUsers: function (req, res) {
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC';
            supportModel.getRecords(offset, count, sort)
                .then(function (users) {
                    res.json(users);
                });
        },
        getAllUsersComments: function (req, res) {
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC',
                myModel = models.comments;
            supportModel.getRecordsWithIncludeModel(myModel, offset, count, sort)
                .then(function (users) {
                    res.json(users);
                });
        },
        getAllUsersArticles: function (req, res) {
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC',
                myModel = models.articles;
            console.log('doopa', myModel);
            supportModel.getRecordsWithIncludeModel(myModel, offset, count, sort)
                .then(function (users) {
                    res.json(users);
                });
        },
        addNewUser: function (req, res) {
            var login = req.body.login,
                password = req.body.password,
                firstName = req.body.firstName,
                lastName = req.body.lastName,
                email = req.body.email,
                status = req.body.status,
                admin = req.body.admin,
                ip = req.body.admin;
            if (!login || !password || !firstName || !lastName) {
                res.json({
                    status: 'error',
                    msg: '400 - Bad request.'
                });
            } else {
                var newUser = models.articles.build({
                    login: login.trim(),
                    password: password.trim(),
                    firstName: firstName.trim(),
                    lastName: lastName.trim()
                });
                newUser.save()
                    .then(function () {
                        res.json(newUser);
                    })
                    .catch(function (e) {
                        res.json(e);
                    });
            }
        },
        updateArticle: function (req, res) {
            supportModel.getSingleRecord(req.params.id)
                .then(function (article) {
                    if (article) {
                        article.updateAttributes({
                            author: req.body.author.trim(),
                            title: req.body.title.trim(),
                            firstName: req.body.intro.trim(),
                            article: req.body.article.trim()
                        }).then(function (article) {
                            res.send(article);
                        });
                    } else {
                        res.json({
                            status: 'error',
                            msg: '404 - Not found.'
                        });
                    }
                });
        },
        deleteSingleArticle: function (req, res) {
            supportModel.getSingleRecord(req.params.id)
                .then(function (article) {
                    if (article) {
                        article.destroy()
                            .then(function () {
                                res.json({
                                    status: 'success',
                                    msg: 'Successfully removed record with id ' + req.params.id
                                });
                            });
                    } else {
                        res.json({
                            status: 'error',
                            msg: '404 - Not found.'
                        });
                    }
                });
        }
    };
})();