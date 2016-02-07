var models = require("./models"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

require('./routes/articlesRoute')(app);
require('./routes/commentsRoute')(app);
require('./routes/usersRoute')(app);
require('./routes/galleryRoute')(app);
app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

models.sequelize.sync().then(function () {
    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
        require('./document')(app._router.stack, 'express');
    });
});
