'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
        'commented_articles',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          article_id: {
            type: Sequelize.INTEGER,
            references: {
              model:'articles',
              key: 'id',
              allowNull: false
            }
          },
          comment_id: {
            type: Sequelize.INTEGER,
            references:{
              model:'comments',
              key: 'id',
              allowNull: false
            }
          }
        },
        {
          engine: 'InnoDB', // default: 'InnoDB'
          charset: 'latin2' // default: null
        }
    );

    queryInterface.createTable(
        'commented_pictures',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          gallery_id: {
            type: Sequelize.INTEGER,
            references: {
              model:'gallery',
              key: 'id',
              allowNull: false
            }
          },
          comment_id: {
            type: Sequelize.INTEGER,
            references:{
              model:'comments',
              key: 'id',
              allowNull: false
            }
          }
        },
        {
          engine: 'InnoDB',
          charset: 'latin2'
        }
    );
  },
  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.dropTable('users');
     */
  }
};
