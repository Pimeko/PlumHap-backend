var jwt = require('jsonwebtoken');
const config = require('../config/JWTconfig');

var exports = module.exports = {
  default: function(req, res, next) {
    const authorization = req.get('authorization');
    const token = authorization.split('Bearer ')[1];

    if (token) {
      jwt.verify(token, config.jwt_secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          next();
        }
      });

    } else {
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  },

  correctUser: function(req, res, next) {
    const authorization = req.get('authorization');
    const token = authorization.split('Bearer ')[1];

    if (token) {
      jwt.verify(token, config.jwt_secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          if (req.params.id != decoded.id) {
            return res.json({ success: false, message: 'Wrong user'});
          }
          next();
        }
      });

    } else {
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  }
}
