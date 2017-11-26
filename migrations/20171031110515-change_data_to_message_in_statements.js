'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Statements', 'data', 'message');
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Statements', 'message', 'data');
  }
};
