'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('activation', 'kod_aktywacyjny', 'activation_code');
      queryInterface.renameColumn('articles', 'autor', 'author');
      queryInterface.renameColumn('articles', 'tytul', 'title');
      queryInterface.renameColumn('articles', 'zajawka', 'intro');
      queryInterface.renameColumn('articles', 'artykul', 'article');
      queryInterface.renameColumn('announcements', 'ogloszenia', 'announcement');
      queryInterface.renameColumn('commercials', 'kategoria', 'category');
      queryInterface.renameColumn('commercials', 'tytul', 'title');
      queryInterface.renameColumn('commercials', 'cena', 'price');
      queryInterface.renameColumn('commercials', 'miasto', 'city');
      queryInterface.renameColumn('commercials', 'telefon', 'phone');
      queryInterface.renameColumn('commercials', 'opis', 'description');
      queryInterface.renameColumn('commercials', 'date', 'cd');
      queryInterface.renameColumn('comments', 'date', 'cd');
      queryInterface.renameColumn('gallery', 'opis', 'description');
      queryInterface.renameColumn('gallery', 'nazwa', 'name');
      queryInterface.renameColumn('gallery', 'id_dzial', 'id_section');
      queryInterface.renameColumn('gallery_sections', 'nazwa', 'name');
      queryInterface.renameColumn('timetable', 'gdzie', 'where');
      queryInterface.renameColumn('timetable', 'przez', 'through');
      queryInterface.renameColumn('timetable', 'godzina', 'time');
      queryInterface.renameColumn('timetable', 'kierunek', 'destination');
      queryInterface.renameColumn('timetable', 'typ', 'type');
      queryInterface.renameColumn('users', 'haslo', 'password');
      queryInterface.renameColumn('users', 'imie', 'first_name');
      queryInterface.renameColumn('users', 'nazwisko', 'last_name');
      queryInterface.renameColumn('visitors', 'komentarz', 'comment');
      queryInterface.renameColumn('wishes', 'zyczenia', 'description');
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
