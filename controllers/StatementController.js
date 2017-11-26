var db = require('../models');
var Statement = db.Statement;

var exports = module.exports = {

  all: function(req, res) {
    Statement.findAll()
      .then(function (statements) {
        res.json({success: true, list: statements});
      })
      .catch(function (error) {
        res.json({success: false, error});
      });
  },

  post: function(req, res) {
    Statement.create({
      data: req.body.data.message
    }).then(obj => {
      res.json({success:true, obj});
    })
    .catch(function (error) {
      res.json({success: false, error});
    });
  },

  get: function(req, res) {
    Statement.findOne({
      where: {id: req.params.id}
    }).then(statement => {
      res.json({success:true, obj: statement});
    })
    .catch(function (error) {
      res.json({success: false, error});
    });
  },

  edit: function(req, res) {
    Statement.findOne({
      where: {id: req.params.id}
    }).then(statement => {
      statement.data = req.body.data.message;
      statement.save().then(function() {
        res.json({success:true, obj: statement});
      })
      .catch(function (error) {
        res.json({success: false, error});
      });
    })
  },

  delete: function(req, res) {
    Statement.findOne({
      where: {id: req.params.id}
    }).then(statement => {
      statement.destroy().then(function() {
        res.json({ success: true });
      })
      .catch(function (error) {
        res.json({ success: false, error});
      })
    })
  }
};
