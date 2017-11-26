'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Activities', 'name', 'title');
    queryInterface.addColumn('Activities', 'description', Sequelize.STRING );
    queryInterface.addColumn('Activities', 'level', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Activities', 'title', 'name');
    queryInterface.removeColumn('Activities', 'description');
    queryInterface.removeColumn('Activities', 'level');
  }
};
