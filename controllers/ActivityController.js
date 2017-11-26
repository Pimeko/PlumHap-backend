var db = require('../models');
var Activity = db.Activity;

var exports = module.exports = {
  all: function(req, res) {
    Activity.findAll()
    .then(function (activities) {
      res.json({success: true, list: activities});
    })
    .catch(function (error) {
      res.json({success: false, error});
    });
  },

  post: function(req, res) {
    Activity.create({
      title: req.body.title,
      nb_times: req.body.nb_times,
      default: req.body.default,
      description: req.body.description,
      level: req.body.level,
    })
    .then(obj => {
      res.json({success:true, obj});
    })
    .catch(function (error) {
      res.json({success: false, error});
    });
  },

  get: function(req, res) {
    Activity.findOne({
      where: {id: req.params.id}
    })
    .then(obj => {
      res.json({success:true, obj});
    })
    .catch(function (error) {
      res.json({success: false, error});
    });
  },

  edit: function(req, res) {
    Activity.findOne({
      where: {id: req.params.id}
    }).then(activity => {
      activity.title = req.body.title;
      activity.nb_times = req.body.nb_times;
      activity.default = req.body.default;
      activity.description = req.body.description;
      activity.level = req.body.level;

      activity.save()
      .then(() => {
        res.json({success:true});
      })
      .catch(function (error) {
        res.json({success: false, error});
      })
    })
  },

  delete: function(req, res) {
    Activity.findOne({
      where: {id: req.params.id}
    }).then(activity => {
      activity.destroy().then(function() {
        res.json({ success: true });
      })
      .catch(function (error) {
        res.json({ success: false, error});
      })
    })
  }

};
