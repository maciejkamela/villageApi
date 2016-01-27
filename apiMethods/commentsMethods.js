/**
 * Created by camel on 2016-01-24.
 */
var models = require('../models');
var MyModel = require('../supportMethods/modelMethods');
var supportModel = new MyModel(models.comments);

module.exports = (function () {
    return {
        getSingleComment: function (req, res) {
            supportModel.getSingleRecord(req.params.id)
                .then(function (comment) {
                    if (!comment) {
                        res.send({
                            status: 'error',
                            error: '404 - Not found.'
                        });
                    }
                    else {
                        res.json(comment);
                    }
                });
        },
        getAllComments: function (req, res) {
            console.log(req.query);
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC';
            console.log("MODEL", models.users);
            models.comments.findAndCountAll({
                include: [models.users],
                order: [
                    ['cd', sort]
                ],
                offset: offset,
                limit: count
            })
                .then(function (comments) {
                    for (var i in comments) {
                        //console.log(comments[i].User);
                    }
                    res.json(comments);
                });
        },
        /**
         * Plus and minus have null value
         * Needs to run sql script in order to change plus, minus and id_parent fields to be nullable
         * @param req
         * @param res
         */
        addNewComment: function (req, res) {
            var id_parent = req.body.id_parent,
                user_id = req.body.user_id,
                nick = req.body.nick,
                title = req.body.title,
                comment = req.body.comment;
            if (!nick || !title || !comment) {
                res.json({
                    status: 'error',
                    msg: '400 - Bad request.'
                });
            } else {
                var newComment = models.comments.build({
                    id_parent: id_parent,
                    user_id: user_id,
                    nick: nick.trim(),
                    title: title.trim(),
                    comment: comment.trim()
                });
                newComment.save()
                    .then(function () {
                        res.json(newComment);
                    })
                    .catch(function (e) {
                        res.json(e);
                    });
            }
        },
        updateComment: function (req, res) {
            var nick = req.body.nick,
                title = req.body.title,
                comment = req.body.comment,
                plus = req.body.plus,
                minus = req.body.minus,
                id_parent = req.body.id_parent;
            supportModel.getSingleRecord(req.params.id)
                .then(function (updatedComment) {
                    if (updatedComment) {
                        updatedComment.updateAttributes({
                            id_parent: id_parent || 0,
                            nick: nick,
                            title: title,
                            comment: comment,
                            plus: plus || 0,
                            minus: minus || 0
                        }).then(function (updatedComment) {
                            res.send(updatedComment);
                        });
                    } else {
                        res.json({
                            status: 'error',
                            msg: '404 - Not found.'
                        });
                    }
                });
        },
        deleteSingleComment: function (req, res) {
            supportModel.getSingleRecord(req.params.id)
                .then(function (comment) {
                    if (comment) {
                        comment.destroy()
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