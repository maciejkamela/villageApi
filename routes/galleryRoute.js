/**
 * Created by camel on 2016-02-07.
 */
module.exports = function (app) {
    var images = require('./../apiMethods/galleryMethods');
    app.get('/images/comments', images.getAllCommentedImages);
    app.get('/images/:id', images.getSingleImage);
    app.get('/images', images.getAllImages);
    //app.post('/images', images.addNewArticle);
    //app.put('/images/:id', images.updateArticle);
    //app.delete('/images/:id', images.deleteSingleArticle);
};
