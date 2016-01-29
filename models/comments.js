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
        freezeTableName: true,
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.users, {
                    foreignKey: 'user_id'
                });
            },
            associate: function (models) {
                this.belongsToMany(models.articles, {
                    through: articles,
                    as: 'articles',
                    foreignKey: 'article_id'
                });
            }
        }
    });
    //Comments.belongsTo(models, {foreignKey: 'user_id'});
    return Comments;
};


