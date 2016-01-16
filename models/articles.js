/**
 * Created by camel on 2016-01-06.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Articles = sequelize.define('artykuly', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author: {
            type: DataTypes.STRING,
            field: 'autor'
        },
        title: {
            type: DataTypes.STRING,
            field: 'tytul'
        },
        intro: {
            type: DataTypes.TEXT,
            field: 'zajawka'
        },
        article: {
            type: DataTypes.TEXT,
            field: 'artykul'
        },
        cd: {
            type: DataTypes.DATE
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true

        //,
        //classMethods: {// te metody trzeba by przeniesc gdzies do jakiegos supportModel, ale jak je wywolywac w poszczegolnych routach? this=model
        //    getSingleRecord: function (id) {
        //        return this.findByPrimary(id);
        //    },
        //    getRecords: function (start, count, orderType) {
        //        console.log('limit',arguments);
        //        return this.findAndCountAll({
        //            order: [
        //                ['cd', orderType]
        //            ],
        //            offset:start,
        //            limit:count
        //        });
        //    }
        //}
    });
    return Articles;
};
