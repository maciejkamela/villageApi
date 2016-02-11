//'use strict';
//
//module.exports = {
//  up: function (queryInterface, Sequelize) {
//
//      queryInterface.changeColumn(
//          'articles',
//          'cd',
//          {
//              allowNull: false,
//              defaultValue: false
//          }
//      );
//      queryInterface.changeColumn(
//          'commercials',
//          'cd',
//          {
//              allowNull: false,
//              defaultValue: false
//          }
//      );
//      queryInterface.changeColumn(
//          'announcements',
//          'cd',
//          {
//              allowNull: false,
//              defaultValue: false
//          }
//      );
//      queryInterface.changeColumn(
//          'gallery',
//          'cd',
//          {
//              allowNull: false,
//              defaultValue: false
//          }
//      );
//      queryInterface.changeColumn(
//          'visitors',
//          'cd',
//          {
//              allowNull: false,
//              defaultValue: false
//          }
//      );
//
//  },
//
//  down: function (queryInterface, Sequelize) {
//    /*
//     Add reverting commands here.
//     Return a promise to correctly handle asynchronicity.
//
//     Example:
//     return queryInterface.dropTable('users');
//     */
//  }
//};
//
