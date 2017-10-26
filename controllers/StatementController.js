var db = require('../models');
var Statement = db.Statement;

var exports = module.exports = {

  all: function(req, res) {
    Statement.findAll()
      .then(function (statements) {
        res.json(statements);
      });
  },

  post: function(req, res) {
    Statement.create({
      data: req.body.data
    })
    .then(function (user) {
      res.json(user);
    });
  },

  get: function(req, res) {
    Statement.findOne({
      where: {id: req.params.id}
    }).then(statement => {
      res.send(statement);
    })
  },

  edit: function(req, res) {
    Statement.findOne({
      where: {id: req.params.id}
    }).then(statement => {
      statement.data = req.body.data;
      statement.save().then(function() {
        res.send(statement);
      })
    })
  }

};
