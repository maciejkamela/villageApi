/**
 * Created by camel on 2016-01-06.
 */
'use strict'
module.exports =  function (sequelize, DataTypes) {
    var Articles = sequelize.define('artykuly', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
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
    });
    //console.log('dddddddd',Articles.id);
Articles.findAll().then(function(x){
        console.log(x[0].dataValues.autor);
    });
    return Articles;
};


