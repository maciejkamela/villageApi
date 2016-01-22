/**
 * Created by camel on 2016-01-06.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Articles = sequelize.define('articles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        intro: {
            type: DataTypes.TEXT
        },
        article: {
            type: DataTypes.TEXT
        },
        cd: {
            type: DataTypes.DATE
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true
    });
    return Articles;
};
