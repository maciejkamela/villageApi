'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
        'comments',
        'id_parent',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'comments',
        'plus',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'comments',
        'minus',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: false
        }
    );
    queryInterface.addColumn(
        'comments',
        'user_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
    );
    queryInterface.changeColumn(
        'users',
        'status',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: false
        }
    );
    queryInterface.changeColumn(
        'users',
        'admin',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: false
        }
    );
    queryInterface.addColumn(
        'users',
        'cd',
        {
          type: Sequelize.DATE,
          allowNull: false
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
