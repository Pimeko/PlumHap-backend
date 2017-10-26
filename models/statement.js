'use strict';
module.exports = (sequelize, DataTypes) => {
  var Statement = sequelize.define('Statement', {
    data: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return Statement;
};
