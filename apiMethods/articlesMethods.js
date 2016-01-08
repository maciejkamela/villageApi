/**
 * Created by camel on 2016-01-06.
 */
var models = require('../models');

module.exports = function () {
    return {
        getSingleArticle: function (req, res) {
            models.articles.getSingleArticle(req.params.id)
                .then(function (article) {
                    res.json(article);
                });
        },
        getAllArticle: function (req, res) {
            models.articles.getArticles()
                .then(function (articles) {
                    res.json(articles);
                });
        },
        addNewArticle: function (req, res) {
            var newArticle = models.articles.build({
                autor: req.body.autor,
                tytul: req.body.tytul,
                zajawka: req.body.zajawka,
                artykul: req.body.artykul
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
            models.articles.find({
                where: {
                    id: req.params.id
                }
            }).then(function (article) {
                if (article) {
                    article.updateAttributes({
                        autor: req.body.autor,
                        tytul: req.body.tytul,
                        zajawka: req.body.zajawka,
                        artykul: req.body.artykul
                    }).then(function (article) {
                        res.send(article);
                    })
                }
            })
        }
    }
}();