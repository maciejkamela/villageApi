/**
 * Created by camel on 2016-01-06.
 */
var models = require('../models');

module.exports = (function () {
    return {
        getSingleComment: function (req, res) {
            models.comments.getSingleComment(req.params.id)
                .then(function (comment) {
                    res.json(comment);
                });
        },
        getAllComments: function (req, res) {
            models.comments.getAllComments()
                .then(function (comments) {
                    res.json(comments);
                });
        }
    };
})();