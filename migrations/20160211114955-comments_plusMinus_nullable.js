'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
        'comments',
        'plus',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
    );
    queryInterface.changeColumn(
        'comments',
        'minus',
        {
          type: Sequelize.INTEGER,
          allowNull: true
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
