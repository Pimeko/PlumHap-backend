var db = require('../models');
var Activity = db.Activity;

var exports = module.exports = {
  all: function(req, res) {
    Activity.findAll()
      .then(function (statements) {
        res.json(statements);
      });
  },

  post: function(req, res) {
    Activity.create({
      name: req.body.name,
      nb_times: req.body.nb_times,
      default: req.body.default,
    })
    .then(function (user) {
      res.json(user);
    })
  },

  get: function(req, res) {
    Activity.findOne({
      where: {id: req.params.id}
    }).then(activity => {
      res.send(activity);
    })
  },

  edit: function(req, res) {
    Activity.findOne({
      where: {id: req.params.id}
    }).then(activity => {
      activity.name = req.body.name;
      activity.nb_times = req.body.nb_times;
      activity.default = req.body.default;

      activity.save().then(function() {
        res.send(activity);
      })
    })
  }

};
