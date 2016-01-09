/**
 * Created by camel on 2016-01-06.
 */
var models = require('../models');

module.exports = (function () {
    return {
        getSingleArticle: function (req, res, err) {
            console.log('dlugosc', req.params.length);
            models.articles.getSingleArticle(req.params.id)
                .then(function (article) {
                    if (!article) {
                        //throw new Error ('There is no article with id ' + req.params.id);
                        //console.error(err.stack);
                        res.status(404).send({status: 'error', error: 'Article not found.'});
                    } else {
                        res.json(article);
                    }
                });
        },
        getAllArticle: function (req, res) {
            models.articles.getArticles()
                .then(function (articles) {
                    if (!articles) {
                        console.log(res.status(402).send({error: 'There is no articles.'}));
                    } else {
                        res.json(articles);
                    }
                });
        },
        addNewArticle: function (req, res) {
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
        getLimitedArticle: function (req, res) {
            console.log(req.params);
            models.articles.limitedArticles(req.params.start, req.params.amount, req.params.orderType)
                .then(function (articles) {
                    if (!articles) {
                        console.log(res.status(404).send({error: 'There is no articles.'}));
                    } else {
                        res.json(articles);
                    }
                });
        }
    };
})();