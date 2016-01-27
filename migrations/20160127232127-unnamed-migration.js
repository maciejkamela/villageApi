'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
        'articles',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'commercials',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'announcements',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: false
        }
    );

    queryInterface.changeColumn(
        'gallery',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'visitors',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: false
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

