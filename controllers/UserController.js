var db = require('../models');
var User = db.User;
var jwt = require('jsonwebtoken');
const config = require('../config/JWTconfig');

var exports = module.exports = {
  login: function(req, res) {
    User.findOne({
      where: {
        login: req.body.login,
        password: req.body.password
      }
    }).then(user => {
      if (user == null) {
        res.json({ success: false, message: "Invalid login/password."});
      }
      else {
        const payload = {
          id: user.id
        };

        var token = jwt.sign(
          payload,
          config.jwt_secret);
        res.json({ success: true, message: token});
      }
    })
  },

  update: function(req, res) {
    const authorization = req.get('authorization');
    const token = authorization.split('Bearer ')[1];
    var user = jwt.decode(token, config.jwt_secret);

    User.findOne({
      where: {
        id: user.id
      }
    }).then(user => {
      if (user == null) {
        res.json({ success: false, "message" : "Invalid login/password."});
      }
      else {
        user.password = req.body.new_password;
        user.save().then(() => {
          res.json({ success: true });
        })
      }
    })
  }

};
