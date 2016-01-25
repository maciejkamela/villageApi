'use strict';
module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_parent: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        user_id: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        nick: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.TEXT
        },
        plus: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        minus: {
            type: DataTypes.INTEGER,
            defaultValue: null
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true
    });
    return Comments;
};


