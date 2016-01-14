/**
 * Created by camel on 2016-01-06.
 */
var models = require('../models');

module.exports = (function () {
    return {
        getSingleArticle: function (req, res) {
            models.articles.getSingleArticle(req.params.id)
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
        getAllArticle: function (req, res) {
            models.articles.getArticles()
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
                return;
            } else {
                var newArticle = models.articles.build({
                    author: req.body.author,
                    title: req.body.title,
                    intro: req.body.intro,
                    article: req.body.article
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
            models.articles.getSingleArticle(req.params.id)
                .then(function (article) {
                    if (article) {
                        article.updateAttributes({
                            author: req.body.author,
                            title: req.body.title,
                            intro: req.body.intro,
                            article: req.body.article
                        }).then(function (article) {
                            res.send(article);
                        });
                    }
                });
        },
        getLimitedArticle: function (req, res) { //toDo
            var start = req.params.start,
                amount = req.params.amount,
                orderType = req.params.orderType;
            if (!start && !amount && !orderType) {
                res.json({
                    status: 'error',
                    msg: '400 - Bad request.'
                });
                return;
            } else if (!start && !amount) {
                models.articles.limitedArticles(null, null, req.params.orderType)
                    .then(function (articles) {
                        res.json(articles);
                    });
            }
            else {
                models.articles.limitedArticles(req.params.start, req.params.amount, req.params.orderType)
                    .then(function (articles) {
                        res.json(articles);
                    });
            }
        },
        deleteSingleArticle: function (req, res, next) {
            //var id = req.params.id;
            //if(!id) {
            //    console.log('doopa');
            //    res.json({status: error,
            //            message: 'There is no record with id ' + req.params.id });
            //    next();
            //    return;
            //} else {
            models.articles.getSingleArticle(req.params.id)
                .then(function (article) {
                    article.destroy()
                        .then(function () {
                            res.json({message: 'Successfully removed record with id ' + req.params.id});
                        });
                });
        }
    };
})();