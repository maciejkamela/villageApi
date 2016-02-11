'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Rename tables
    queryInterface.renameTable('artykuly', 'articles');
    queryInterface.renameTable('aktywacja', 'activation');
    queryInterface.renameTable('galeria', 'gallery');
    queryInterface.renameTable('galeria_dzialy', 'gallery_sections');
    queryInterface.renameTable('ksiega', 'visitors');
    queryInterface.renameTable('oferty', 'commercials');
    queryInterface.renameTable('ogloszenia', 'announcements');
    queryInterface.renameTable('pks_bus', 'timetable');
    queryInterface.renameTable('zyczenia', 'wishes');
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
