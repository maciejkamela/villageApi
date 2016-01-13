/**
 * Created by camel on 2016-01-06.
 */
var models = require('../models');

module.exports = (function () {
    return {
        getSingleArticle: function (req, res) {
            models.articles.getSingleArticle(req.params.id)
                .then(function (article) {
                    if (req.params.id != parseInt(req.params.id, 10)){
                        res.send({status: 'error', error: 'Id is not an integer.'});
                    }
                    else if (!article){
                        res.send({status: 'error', error: 'Article not found.'});
                    }
                    else {
                        res.json(article);
                    }
                });
        },
        getAllArticle: function (req, res) {
            models.articles.getArticles()
                .then(function (articles) {
                    if (!articles) {
                        console.log(res.send({error: 'There is no articles.'}));
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
            console.log('dddd', req.query);
            models.articles.limitedArticles(req.params.start, req.params.amount,req.params.orderType)
                .then(function (articles) {
                    console.log('dddd', req.query);
                    if (!articles) {
                        console.log(res.status(404).send({error: 'There is no articles.'}));
                    } else {
                        res.json(articles);
                    }
                });
        }
        ,
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
                        .then(function (){
                            res.json({message: 'Successfully removed record with id ' + req.params.id });
                        })
                })
        }
    };
})();