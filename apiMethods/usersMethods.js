/**
 * Created by camel on 2016-02-05.
 */
var models = require('../models'),
    MyModel = require('../supportMethods/modelMethods'),
    supportModel = new MyModel(models.users);

module.exports = (function () {
    return {
        getSingleUser: function (req, res) {
            var includedModel = models.comments;
            supportModel.getSingleRecord(req.params.id, includedModel)
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
                includedModel = models.comments;
            supportModel.getRecordsWithIncludeModel(includedModel, offset, count, sort)
                .then(function (users) {
                    res.json(users);
                });
        },
        getAllUsersArticles: function (req, res) {
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC',
                includedModel = models.articles;
            console.log('doopa', includedModel);
            supportModel.getRecordsWithIncludeModel(includedModel, offset, count, sort)
                .then(function (users) {
                    res.json(users);
                });
        },
        addNewUser: function (req, res) {
            //console.log(req);
            var login = req.body.login,
                password = req.body.password,
                first_name = req.body.first_name,
                last_name = req.body.last_name,
                email = req.body.email,
                status = req.body.status || 0,
                admin = req.body.admin || 0,
                ip = req.body.ip;
            if (!login || !password || !first_name || !last_name || !email || !ip) {
                res.json({
                    status: 'error',
                    msg: '400 - Bad request.'
                });
            } else {
                var newUser = models.users.build({
                    login: login.trim(),
                    password: password.trim(),
                    first_name: first_name.trim(),
                    last_name: last_name.trim(),
                    email: email.trim(),
                    status: status,
                    admin: admin,
                    ip: ip
                });
                newUser.save()
                    .then(function () {
                        res.json(newUser);
                    })
                    .catch(function (e) {
                        res.json(e);
                    });
            }
        }
    };
    //ToDo update user i delete user. co chcemy updatowac i czy usuwamy userow. Ja wolalbym nie usuwac.
})();