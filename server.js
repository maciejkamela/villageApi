/**
 * Created by camel on 2016-01-04.
 */
var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
require('./routes/route.js')(app);


app.listen(port, function () {
    require('./document')(app._router.stack, 'express');
});