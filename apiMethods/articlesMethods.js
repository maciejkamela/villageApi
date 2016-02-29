/**
 * Created by camel on 2016-01-06.
 */

//toDo jak przeniesć metody z apiMethods do jedego pliku, bo te metody sa prawie takie same
// toDo kwestia jak przekazywac model do routa?
var models = require('../models'),
    MyModel = require('../supportMethods/modelMethods'),
    supportModel = new MyModel(models.articles);

module.exports = (function () {
    return {
        getSingleArticle: function (req, res) {
            var includedModel = models.comments;
            supportModel.getSingleRecord(req.params.id, includedModel)
                .then(function (article) {
                    if (!article) {
                        res.send({
                            status: 'error',
                            error: '404 - Not found.'
                        });
                    }
                    else {
                        res.json(article);
                    }
                });
        },
        setArticle: function (req, res) {
            models.articles.addComments(models.comments, {
                user_id: req.body.user_id,
                nick: req.body.nick,
                title: req.body.title,
                comment: req.body.comment
            })
        },
        getAllArticles: function (req, res) {
            console.log('doopa', req.query);
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'DESC';
            //includedModel = models.comments;

            supportModel.getRecords(offset, count, sort)
                .then(function (articles) {
                    res.json(articles);
                });
        },
        getAllCommentedArticles: function (req, res) {
            console.log(req.query);
            var offset = req.query.offset || null,
                count = req.query.count || null,
                sort = req.query.sort || 'ASC',
                includedModel = models.comments;
            console.log('doopa', includedModel);
            supportModel.getRecordsWithIncludeModel(includedModel, offset, count, sort)
                .then(function (articles) {
                    res.json(articles);
                });
        },
        addNewArticle: function (req, res) {
            var author = req.body.author,
                title = req.body.title,
                intro = req.body.intro,
                article = req.body.article;
            if (!author || !title || !intro || !article) {
                res.json({
                    status: 'error',
                    msg: '400 - Bad request.'
                });
            } else {
                var newArticle = models.articles.build({
                    author: author.trim(),
                    title: title.trim(),
                    intro: intro.trim(),
                    article: article.trim()
                });
                newArticle.save()
                    .then(function () {
                        res.json(newArticle);
                    })
                    .catch(function (e) {
                        res.json(e);
                    });
            }
        },
        updateArticle: function (req, res) {
            models.articles.findByPrimary(req.params.id)
                .then(function (article) {
                    if (article) {
                        article.updateAttributes({
                            author: req.body.author.trim(),
                            title: req.body.title.trim(),
                            intro: req.body.intro.trim(),
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
            models.articles.findByPrimary(req.params.id)
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