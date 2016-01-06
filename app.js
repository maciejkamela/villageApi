var models = require("./models"),
    articles = require('./apiMethods/articlesMethods'),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
models.sequelize.sync().then(function () {
    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
        require('./document')(app._router.stack, 'express');
    });
});

app.get('/articles/:id', articles.getSingleArticle);
app.get('/articles', articles.getAllArticle);