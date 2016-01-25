/**
 * Created by camel on 2016-01-25.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var CommentedArticles = sequelize.define('comments_articles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Articles',
                key: 'id'
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Comments',
                key: 'id'
            }
        }
    }, {
        updatedAt: false,
        freezeTableName: true
    });
    return CommentedArticles;

};


