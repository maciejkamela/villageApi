/**
 * Created by camel on 2016-02-07.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Gallery = sequelize.define('gallery', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        id_section: {
            type: DataTypes.INTEGER
        },
        cd: {
            type: DataTypes.DATE
        }
    }, {
        createdAt: 'cd',
        updatedAt: false,
        freezeTableName: true,
        classMethods: {
            associate: function (models) {
                this.belongsToMany(models.comments, {
                    through: 'commented_images'
                    //as: 'comments',
                    //foreignKey: 'comment_id'
                });
            }
        }
    });
    return Gallery;
};

