module.exports = function (app) {
    var articles = require('./../apiCalls/api.js');
    var allArticles = 'select * from artykuly';
    var singleArticle = 'select * from artykuly where id = ?';

    app.get("/articles",function(req,res){
        articles.getAllElements(allArticles,req,res);
    });

    app.get("/articles/:id",function(req,res){
        articles.getSingleElement(singleArticle,req,res);
    });
};
