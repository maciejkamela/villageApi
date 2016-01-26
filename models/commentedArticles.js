/**
 * Created by camel on 2016-01-25.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var CommentedArticles = sequelize.define('commented_articles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article_id: {
            type: DataTypes.INTEGER,
            model: 'articles',
            key: 'id'
        },
        comment_id: {
            type: DataTypes.INTEGER,
            model: 'comments',
            key: 'id'
        }
    }, {
        updatedAt: false,
        freezeTableName: true
    });
    return CommentedArticles;

};
