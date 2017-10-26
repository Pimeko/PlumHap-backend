var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var colors = require('colors');
var db = require('./models');

// Controllers
var statement_controller = require('./controllers/StatementController');
var activity_controller = require('./controllers/ActivityController');
var user_controller = require('./controllers/UserController');

// For POST body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

router.route('/')
  .get(function(req, res) {
    res.send("Everything is fine !")
  });

router.route('/statements')
  .get(statement_controller.all)
  .post(statement_controller.post);

router.route('/statements/:id')
  .get(statement_controller.get)
  .put(statement_controller.edit);

router.route('/activities')
  .get(activity_controller.all)
  .post(activity_controller.post);

router.route('/activities/:id')
  .get(activity_controller.get)
  .put(activity_controller.edit);

router.route('/login')
  .post(user_controller.login)
  .put(user_controller.update);

console.log("\u001b[2J\u001b[0;0H");
console.log('Running Server on port 8000 ! '.yellow);
app.listen(8000, function() {
  db.sequelize.sync();
});
