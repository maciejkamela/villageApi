/**
 * Created by camel on 2016-01-25.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        admin: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        ip: {
            type: DataTypes.STRING
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true
    });
    //this.Users.hasMany(this.comments)
    return Users;
};


