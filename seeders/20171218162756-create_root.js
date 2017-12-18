'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      login: 'admin',
      password: 'admin'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', [{
      login :'admin'
    }])
  }
};
