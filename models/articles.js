/**
 * Created by camel on 2016-01-06.
 */
'use strict'
module.exports =  function (sequelize, DataTypes) {
    var Articles = sequelize.define('artykuly', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        autor: {
            type: DataTypes.STRING
        },
        tytul: {
            type: DataTypes.STRING
        },
        zajawka: {
            type: DataTypes.TEXT
        },
        artykul: {
            type: DataTypes.TEXT
        },
        cd: {
            type: DataTypes.DATE
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true, //domyslnie sequalize zmienia nazwe tabeli na liczbe mnoga, my nie chcemy aby nazwa tabeli zostala zmieniona
        classMethods: {
            getSingleArticle: function(id) {
                return this.findOne({
                    where: {
                        id: id
                    }
                })
            },
            getArticles: function() {
                return this.findAndCountAll();
            }
        }
    });
    return Articles;
};


