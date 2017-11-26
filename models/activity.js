'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    nb_times: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    default: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return Activity;
};
