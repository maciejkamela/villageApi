/**
 * Created by camel on 2016-01-25.
 */
'use strict';
var Sequelize = require('sequelize');
require('sequelize-isunique-validator')(Sequelize);
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            isUnique: true,
            validate: {
                isUnique: sequelize.validateIsUnique('login')
            }
        },
        password: {
            type: DataTypes.STRING
            //ToDo pewnie jakas walidacja na dlugosc i skomplikowanie hasla
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            isUnique: true,
            validate: {
                isEmail: true,
                isUnique: sequelize.validateIsUnique('email')
            }
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            validate: {
                isIn: [[0, 1]]
            }
        },
        admin: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            validate: {
                isIn: [[0, 1]]
            }
        },
        ip: {
            type: DataTypes.STRING,
            validate: {
                isIP: true
            }
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true,
        classMethods: {
            associate: function (models) {
                this.hasMany(models.comments, {
                    foreignKey: 'user_id'
                });
                this.hasMany(models.articles, {
                    foreignKey: 'user_id'
                });
            }
        }
    });
    return Users;
};


