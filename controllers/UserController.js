var db = require('../models');
var User = db.User;

var exports = module.exports = {
  login: function(req, res) {
    User.findOne({
      where: {
        login: req.body.login,
        password: req.body.password
      }
    }).then(user => {
      if (user == null) {
        res.json({"status" : "fail", "message" : "Invalid login/password."});
      }
      else {
        res.json({"status" : "success"});
      }
    })
  },

  update: function(req, res) {
    User.findOne({
      where: {
        login: req.body.login,
        password: req.body.password
      }
    }).then(user => {
      if (user == null) {
        res.json({"status" : "fail", "message" : "Invalid login/password."});
      }
      else {
        user.password = req.body.new_password;
        user.save().then(() => {
          res.json({"status" : "success"});
        })
      }
    })
  }

};
