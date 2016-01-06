var models = require("./models"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
require('./routes/articlesRoute')(app);
require('./routes/test')(app);
//require('./routes/index.js')(app);
models.sequelize.sync().then(function () {
    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
        require('./document')(app._router.stack, 'express');
    });
});
