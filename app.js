var models = require("./models"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./routes/articlesRoute')(app);

models.sequelize.sync().then(function () {
    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
        require('./document')(app._router.stack, 'express');
    });
});
