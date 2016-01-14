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
        freezeTableName: true,
        classMethods: {// te metody trzeba by przeniesc gdzies do jakiegos supportModel, ale jak je wywolywac w poszczegolnych routach? this=model
            getSingleArticle: function (id) {
                return this.findByPrimary(id);
            },
            getArticles: function () {
                return this.findAndCountAll({
                    order: [
                        ['cd', 'DESC']
                    ]
                });
            },
            limitedArticles: function (start, count,orderType) {
                console.log('limit',arguments);
                return this.findAndCountAll({
                    order: [
                        ['cd', orderType]
                    ],
                    offset:start,
                    limit:count
                });
            }
        }
    });
    return Articles;
};

//// Fetch 10 instances/rows
//Project.findAll({ limit: 10 })
//
//// Skip 8 instances/rows
//Project.findAll({ offset: 8 })
//
//// Skip 5 instances and fetch the 5 after that
//Project.findAll({ offset: 5, limit: 5 })

//
//jak podam takie cos
//articles/offset/0/count/20
//to ma mi wyswietlic 20 pierwszych artykulow
//articles/offset/10/count/20
//od 0-19
//ten drugi od 10-29
//itd
//ale jeszcze chcialbym moc sortowac po jakims polu
//
//articles/offset/10/count/20/sort/cd/ASC
//czyli posortuje mi po dacie rosnaco
//nie musze podawac tych dodatkowych parametrow
//moge wywolac to tak articles
//articles/offset/10/count/20
//albo
//articles/sort/cd
//articles/srot/cd/DESC
//albo articles/offset/10/count/20/sort/cd/DESC

