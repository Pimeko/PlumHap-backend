var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var colors = require('colors');
var db = require('./models');
var cors = require('cors')

// Controllers
var statement_controller = require('./controllers/StatementController');
var activity_controller = require('./controllers/ActivityController');
var user_controller = require('./controllers/UserController');

// Middleware
var test_middleware = require('./middleware/TestMiddleware');
var cors_middleware = require('./middleware/CORSMiddleware');
var auth_middleware = require('./middleware/AuthMiddleware');

// For POST body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
var whitelist = [
    'http://0.0.0.0:3000',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

router.route('/')
  .get(test_middleware.default, function(req, res) {
    res.send("Everything is fine !")
  });

router.route('/statements')
  .get(auth_middleware.default, statement_controller.all)
  .post(cors_middleware.default, auth_middleware.default, statement_controller.post);

router.route('/statements/:id')
  .get(auth_middleware.default, statement_controller.get)
  .put(auth_middleware.default, statement_controller.edit)
  .delete(auth_middleware.default, statement_controller.delete);

router.route('/activities')
  .get(auth_middleware.default, activity_controller.all)
  .post(cors_middleware.default, auth_middleware.default, activity_controller.post);

router.route('/activities/:id')
  .get(auth_middleware.default, activity_controller.get)
  .put(auth_middleware.default, activity_controller.edit)
  .delete(auth_middleware.default, activity_controller.delete);

router.route('/login')
  .post(cors_middleware.default, user_controller.login);

router.route('/users/:id')
  .put(auth_middleware.correctUser, user_controller.update);

console.log("\u001b[2J\u001b[0;0H");
console.log('Running Server on port 8000 ! '.yellow);
app.listen(8000, function() {
  db.sequelize.sync();
});
