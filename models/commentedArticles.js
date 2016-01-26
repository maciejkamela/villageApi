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
            references: 'articles',
            referencesKey: 'id',
            allowNull: false
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: 'comments',
            referencesKey: 'id',
            allowNull: false
        }
    }, {
        updatedAt: false,
        freezeTableName: true
    });
    return CommentedArticles;
};
