'use strict';
module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_parent: {
          type:DataTypes.INTEGER
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
            type: DataTypes.INTEGER
        },
        minus: {
            type: DataTypes.INTEGER
        }
    }, {
        createdAt: 'date',
        updatedAt: false,
        freezeTableName: true, //domyslnie sequalize zmienia nazwe tabeli na liczbe mnoga, my nie chcemy aby nazwa tabeli zostala zmieniona
        classMethods: {
            getSingleComment: function (id) {
                return this.findOne({
                    where: {
                        id: id
                    }
                });
            },
            getAllComments: function () {
                return this.findAndCountAll();
            }
        }
    });
    return Comments;
};


